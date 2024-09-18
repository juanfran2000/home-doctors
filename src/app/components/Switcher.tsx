"use client";
import { useRouter } from "next/navigation";
import { ChangeEvent, useTransition } from "react";
import { useLocale } from "use-intl";

export default function Switcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    startTransition(() => {
      router.replace(`${nextLocale}`);
    });
  };
  return (
    <label className="border-1 rounded">
      <p className="sr-only">Change lenguage</p>
      <select
        defaultValue={localActive}
        className="bg-transparent py-2"
        onChange={onSelectChange}
        disabled={isPending}
      >
        <option value="es">Español</option>
        <option value="en">English</option>
      </select>
    </label>
  );
}
