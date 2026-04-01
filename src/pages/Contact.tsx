import { useLanguage } from "@/contexts/LanguageContext";
import { MapPin, Phone, Mail } from "lucide-react";

const Contact = () => {
  const { t } = useLanguage();

  const items = [
    {
      icon: MapPin,
      label: t("contact.address.label"),
      value: t("contact.address"),
    },
    {
      icon: Phone,
      label: t("contact.phone.label"),
      value: t("contact.phone"),
      href: `tel:${t("contact.phone").replace(/\s/g, "")}`,
    },
    {
      icon: Mail,
      label: t("contact.email.label"),
      value: t("contact.email"),
      href: `mailto:${t("contact.email")}`,
    },
  ];

  return (
    <div className="h-full flex flex-col items-center justify-center px-6 md:px-12">
      <div className="max-w-lg w-full text-center">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-12">
          {t("contact.title")}
        </h1>
        <div className="space-y-8">
          {items.map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <item.icon className="w-5 h-5 text-primary" />
              <span className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">
                {item.label}
              </span>
              {item.href ? (
                <a
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors text-sm"
                >
                  {item.value}
                </a>
              ) : (
                <span className="text-foreground text-sm">{item.value}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
