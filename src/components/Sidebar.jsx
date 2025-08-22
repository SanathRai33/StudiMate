import Link from "next/link";
import React, { useState } from "react";
import { Button } from "./ui/button";
import {
    AtomIcon,
    Home,
    NotepadText,
    GoalIcon,
    NewspaperIcon,
    Table,
} from "lucide-react";

function Sidebar() {

    const user = {
        name: "Rai",
        _id: 11,
        image: "https://media.istockphoto.com/id/1682296067/photo/happy-studio-portrait-or-professional-man-real-estate-agent-or-asian-businessman-smile-for.jpg?s=612x612&w=0&k=20&c=9zbG2-9fl741fbTWw5fNgcEEe4ll-JegrGlQQ6m54rg=",
    };

    return (
        <aside className="lg:flex flex-col h-[calc(100% + 1px)] bg-white border-r-2 border-gray-200 w-64 hidden">
            {/* <Button
        className="lg:hidden ml-2 mt-0 text-black self-start bg-white"
        onClick={onClose}
        aria-label="Close sidebar"
      >
        <Menu color="black" />
      </Button> */}
            <nav className="lg:flex flex-col space-y-0.5 px-2 w-64 flex-1 overflow-y-auto bg-gray-200">
                <div className="flex flex-col py-5 gap-3 bg-gray-200">
                    <Button className="flex justify-start space-x-2 space-y-1 bg-gray-100 hover:bg-white w-full rounded-xl text-[18px] font-bold h-10">
                        <Home color="black" style={{ height: "25px", width: "25px" }} />
                        <Link href="/" className="text-gray-800 hover:text-blue-500">
                            Dashboard
                        </Link>
                    </Button>

                    <Button className="flex justify-start space-x-2 bg-gray-100 hover:bg-white w-full rounded-xl text-[18px] font-semibold h-10">
                        <AtomIcon color="black" style={{ height: "25px", width: "25px" }} />
                        <Link href="/chatAi" className="text-gray-800 hover:text-blue-500">
                            Chat with AI
                        </Link>
                    </Button>

                    <Button className="flex justify-start space-x-2 bg-gray-100 hover:bg-white w-full rounded-xl text-[18px] font-semibold h-10 ">
                        <NotepadText color="black" style={{ height: "25px", width: "25px" }} />
                        <Link
                            href="/notes"
                            className="text-gray-800 hover:text-blue-500"
                        >
                            Notes
                        </Link>
                    </Button>

                    <Button className="flex justify-start space-x-2 bg-gray-100 hover:bg-white w-full rounded-xl text-[18px] py-1 font-semibold h-10 ">
                        <GoalIcon color="black" style={{ height: "25px", width: "25px" }} />
                        <Link href="/goal" className="text-gray-800 hover:text-blue-500">
                            Goal
                        </Link>
                    </Button>

                    <Button className="flex justify-start space-x-2 bg-gray-100 hover:bg-white w-full rounded-xl text-[18px] font-semibold h-10 ">
                        <NewspaperIcon color="black" style={{ height: "25px", width: "25px" }} />
                        <Link href="/news" className="text-gray-800 hover:text-blue-500">
                            News
                        </Link>
                    </Button>

                    <Button className="flex justify-start space-x-2 bg-gray-100 hover:bg-white w-full rounded-xl text-[18px] font-semibold h-10 ">
                        <Table color="black" style={{ height: "25px", width: "25px" }} />
                        <Link href="/timetable" className="text-gray-800 hover:text-blue-500">
                            Time Table
                        </Link>
                    </Button>
                </div>
            </nav>
        </aside>
    );
}

export default Sidebar;
