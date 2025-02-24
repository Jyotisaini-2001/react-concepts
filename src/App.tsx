/** @format */

import "./App.css";
import { AppSidebar } from "./components/sidebar";
import ResizeObserver from "./concepts/resize-observer";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

function App() {
  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <SidebarTrigger />
        <ResizeObserver />
      </SidebarProvider>
    </>
  );
}

export default App;
