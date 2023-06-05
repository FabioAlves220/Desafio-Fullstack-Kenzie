import AddContactForm from "@/components/addContactForm";
import { NextPage } from "next";

const ContactsUpdate: NextPage = () => {
  return (
    <main className="body min-h-screen flex items-center justify-center">
      <AddContactForm context={""} />
    </main>
  );
};

export default ContactsUpdate;
