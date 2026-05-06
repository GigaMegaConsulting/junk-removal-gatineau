import { siteConfig, type Lang } from "@/lib/site.config";
import { t } from "@/lib/copy";

interface Props {
  lang: Lang;
}

export function ContactForm({ lang }: Props) {
  const tt = t(lang);
  return (
    <form
      action={`mailto:${siteConfig.email}`}
      method="post"
      encType="text/plain"
      className="flex flex-col gap-4 bg-[#fafafa] border border-[#e6e6e6] rounded-md p-6 md:p-8"
    >
      <div className="grid grid-cols-2 gap-3">
        <label className="flex flex-col gap-1">
          <span className="text-xs uppercase tracking-wide text-[#5a5a5a]">{tt.firstName} *</span>
          <input name="firstName" required className="border border-[#cfcfcf] rounded px-3 py-2.5 focus:border-[#0a0a0a] outline-none text-base bg-white" />
        </label>
        <label className="flex flex-col gap-1">
          <span className="text-xs uppercase tracking-wide text-[#5a5a5a]">{tt.lastName} *</span>
          <input name="lastName" required className="border border-[#cfcfcf] rounded px-3 py-2.5 focus:border-[#0a0a0a] outline-none text-base bg-white" />
        </label>
      </div>
      <label className="flex flex-col gap-1">
        <span className="text-xs uppercase tracking-wide text-[#5a5a5a]">{tt.phone} *</span>
        <input name="phone" type="tel" required className="border border-[#cfcfcf] rounded px-3 py-2.5 focus:border-[#0a0a0a] outline-none text-base bg-white" />
      </label>
      <label className="flex flex-col gap-1">
        <span className="text-xs uppercase tracking-wide text-[#5a5a5a]">{tt.email} *</span>
        <input name="email" type="email" required className="border border-[#cfcfcf] rounded px-3 py-2.5 focus:border-[#0a0a0a] outline-none text-base bg-white" />
      </label>
      <label className="flex flex-col gap-1">
        <span className="text-xs uppercase tracking-wide text-[#5a5a5a]">{tt.comment} *</span>
        <textarea name="comment" rows={4} required className="border border-[#cfcfcf] rounded px-3 py-2.5 focus:border-[#0a0a0a] outline-none text-base bg-white" />
      </label>
      <button
        type="submit"
        className="self-center bg-black hover:bg-[#1a1a1a] text-white uppercase tracking-wide font-semibold px-10 py-3 rounded transition mt-2"
      >
        {tt.submit}
      </button>
    </form>
  );
}
