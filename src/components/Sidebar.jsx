"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "./ui/button";
import {
    Home,
    NotepadText,
    GoalIcon,
    NewspaperIcon,
    Table,
    Bot,
} from "lucide-react";

function Sidebar() {

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    };


    const itemVariants = {
        hidden: { y: 40, opacity: 0 },
        show: { y: 0, opacity: 1, transition: { duration: 0.4, ease: "easeOut" } },
    };

    return (
        <aside className="lg:flex flex-col h-[calc(100% + 1px)] bg-white border-r-2 border-gray-200 w-64 hidden">
            <motion.nav
                initial="hidden"
                animate="show"
                variants={containerVariants}
                className="lg:flex flex-col space-y-0.5 px-2 w-64 flex-1 overflow-y-auto bg-gray-200 h-full"
            >
                <div className="flex flex-col py-5 gap-3 bg-gray-200">
                    {/* Dashboard */}
                    <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }}>
                        <Button className="flex justify-start space-x-2 bg-gray-100 hover:bg-white w-full rounded-xl text-[18px] font-semibold h-10 ">
                            <Home color="black" style={{ height: "25px", width: "25px" }} />
                            <Link href="/" className="text-gray-800 hover:text-blue-500">
                                Dashboard
                            </Link>
                        </Button>
                    </motion.div>

                    {/* Chat with AI */}
                    <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }}>
                        <Button className="flex justify-start space-x-2 bg-gray-100 hover:bg-white w-full rounded-xl text-[18px] font-semibold h-10 ">
                            <Bot color="black" style={{ height: "25px", width: "25px" }} />
                            <Link href="/chat" className="text-gray-800 hover:text-blue-500">
                                Chat with AI
                            </Link>
                        </Button>
                    </motion.div>

                    {/* Notes */}
                    <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }}>
                        <Button className="flex justify-start space-x-2 bg-gray-100 hover:bg-white w-full rounded-xl text-[18px] font-semibold h-10 ">
                            <NotepadText color="black" style={{ height: "25px", width: "25px" }} />
                            <Link href="/notes" className="text-gray-800 hover:text-blue-500">
                                Notes
                            </Link>
                        </Button>
                    </motion.div>

                    {/* Goal */}
                    <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }}>
                        <Button className="flex justify-start space-x-2 bg-gray-100 hover:bg-white w-full rounded-xl text-[18px] font-semibold h-10 ">
                            <GoalIcon color="black" style={{ height: "25px", width: "25px" }} />
                            <Link href="/goal" className="text-gray-800 hover:text-blue-500">
                                Goal
                            </Link>
                        </Button>
                    </motion.div>

                    {/* News */}
                    <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }}>
                        <Button className="flex justify-start space-x-2 bg-gray-100 hover:bg-white w-full rounded-xl text-[18px] font-semibold h-10 ">
                            <NewspaperIcon color="black" style={{ height: "25px", width: "25px" }} />
                            <Link href="/news" className="text-gray-800 hover:text-blue-500">
                                News
                            </Link>
                        </Button>
                    </motion.div>

                    {/* Time Table */}
                    <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }}>
                        <Button className="flex justify-start space-x-2 bg-gray-100 hover:bg-white w-full rounded-xl text-[18px] font-semibold h-10 ">
                            <Table color="black" style={{ height: "25px", width: "25px" }} />
                            <Link href="/timetable" className="text-gray-800 hover:text-blue-500">
                                Time Table
                            </Link>
                        </Button>
                    </motion.div>
                </div>
            </motion.nav>
        </aside>
    );
}

export default Sidebar;
