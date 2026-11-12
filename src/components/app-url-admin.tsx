import { useEffect, useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { Link2, RefreshCw } from "lucide-react";
import { getAppUrlSetting, setAppUrlSetting } from "@/lib/app-url.functions";

/** Admin: change the link the Android app loads. Nothing changes until the button is pressed. */
export function AppUrlAdmin() {
  const getUrl = useServerFn(getAppUrlSetting);
  const saveUrl = useServerFn(setAppUrlSetting);
  const [current, setCurrent] = useState<{ url: string; updatedAt: string | null } | null>(null);
  const [draft, setDraft] = useState("");
  const [msg, setMsg] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    getUrl().then((r) => { setCurrent(r); setDraft(r.url); }).catch(() => setMsg("تعذر قراءة الرابط الحالي."));
  }, [getUrl]);

  async function apply() {
    if (!window.confirm(`سيتم نقل كل تطبيقات الأندرويد إلى:\n${draft}\nهل أنت متأكد؟`)) return;
    setBusy(true); setMsg(null);
    try {
      const password = window.localStorage.getItem("actes.adminpw") || "";
      const r = await saveUrl({ data: { password, url: draft } });
      if (r.ok) { setCurrent({ url: r.url, updatedAt: r.updatedAt }); setDraft(r.url); setMsg("تم اعتماد الرابط الجديد ✔"); }
      else setMsg(r.error);
    } catch { setMsg("فشل الحفظ — تأكد من كلمة مرور الإدارة."); }
    setBusy(false);
  }

  return (
    <section className="mt-6 rounded-xl border border-border bg-card p-4 shadow-sm">
      <h2 className="flex items-center gap-2 text-base font-black"><Link2 className="size-4" /> رابط تطبيق الأندرويد المرجعي</h2>
      <p className="mt-1 text-[11px] text-muted-foreground">الرابط المعتمد حالياً:</p>
      <p dir="ltr" className="mt-1 break-all rounded-md bg-muted px-3 py-2 text-xs font-bold">{current?.url ?? "…"}</p>
      {current?.updatedAt && <p className="mt-1 text-[10px] text-muted-foreground">آخر اعتماد: {new Date(current.updatedAt).toLocaleString("ar")}</p>}
      <label className="mt-3 block text-[11px] font-bold">الرابط الجديد</label>
      <input dir="ltr" value={draft} onChange={(e) => setDraft(e.target.value)} placeholder="https://..." className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm" />
      <button type="button" disabled={busy || !draft || draft === current?.url} onClick={apply}
        className="mt-3 inline-flex items-center gap-2 rounded-full bg-brand px-4 py-2 text-xs font-black text-brand-foreground disabled:opacity-50">
        <RefreshCw className="size-4" /> تحديث واعتماد الرابط المرجعي الجديد
      </button>
      {msg && <p className="mt-2 text-[11px] font-bold">{msg}</p>}
    </section>
  );
}
