"use client";
import AllUsers from "@/components/AllUsers";
import CreateForm from "@/components/CreateForm";
import store from "@/store/store";
import { Provider } from "react-redux";

export default function Home() {
  return (
    <Provider store={store}>
      <CreateForm />
      <AllUsers />
    </Provider>
  );
}
