import AddContactForm from "@/components/addContactForm";
import { NextPage } from "next";
import { useRouter } from "next/router";

const Contacts: NextPage = () => {
  const router = useRouter();
  return (
    <main className="body-main">
      <AddContactForm context={router.query.context} id={router.query.id} />
    </main>
  );
};

export default Contacts;
