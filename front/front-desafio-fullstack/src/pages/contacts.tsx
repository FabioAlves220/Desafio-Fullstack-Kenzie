import AddContactForm from "@/components/addContactForm";
import { NextPage } from "next";
import { useRouter } from "next/router";

const Contacts: NextPage = () => {
  const router = useRouter();
  return (
    <main className="body min-h-screen flex items-center justify-center">
      <AddContactForm context={router.query.context} id={router.query.id} />
    </main>
  );
};

export default Contacts;
