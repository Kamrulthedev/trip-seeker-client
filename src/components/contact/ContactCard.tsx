import React from "react";

interface ContactCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const ContactCard: React.FC<ContactCardProps> = ({
  icon: Icon,
  title,
  description,
}) => {
  return (
    <div className="flex items-start gap-5">
      <Icon className="text-4xl" />
      <aside>
        <h5 className="text-gray-900 text-xl">{title}</h5>
        <p className="text-gray-600">{description}</p>
      </aside>
    </div>
  );
};

export default ContactCard;
