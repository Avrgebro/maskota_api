import { useEffect, useState } from "react";
import { usePage } from "@inertiajs/inertia-react";
import Toast from "@/Components/Shared/Toast";

export default function Flash() {
  const { flash } = usePage().props;
  const [message, setMessage] = useState(null);

  useEffect(() => {
    if (flash.message) {
      setMessage(flash.message);
      setTimeout(() => {
        setMessage(null);
      }, 5000);
    }
  }, [flash]);

  if (!message) {
    return null;
  }

  return <Toast message={message} />;
}
