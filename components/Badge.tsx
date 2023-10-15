import React from "react";

export default function Badge({ label }: { label: string }) {
  return <div className="body2 px-2.5 py-1 bg-neutral-10 rounded-lg">{label}</div>;
}
