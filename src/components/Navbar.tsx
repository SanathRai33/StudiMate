import { Bell, Menu, Mic, Search, User, VideoIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Avatar, AvatarImage } from "./ui/avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";
import { useRouter } from "next/router";
import Logo from "../assets/Logo.png";

function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [openHambug, setOpenHambug] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setShowMobileSearch(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch(e as any);
    }
  };

  useEffect(() => {
    if (openHambug) {
      document.body.classList.add("sidebar-open");
    } else {
      document.body.classList.remove("sidebar-open");
    }

    return () => {
      document.body.classList.remove("sidebar-open");
    };
  }, [openHambug]);

  const user = {
    name: "Rai",
    _id: 11,
    image: "https://media.istockphoto.com/id/1682296067/photo/happy-studio-portrait-or-professional-man-real-estate-agent-or-asian-businessman-smile-for.jpg?s=612x612&w=0&k=20&c=9zbG2-9fl741fbTWw5fNgcEEe4ll-JegrGlQQ6m54rg=",
  };

  return (
    <header className="flex flex-col sticky top-0 z-50 bg-white shadow-md border-b-2 border-black w-full h-15">
      <div className="flex items-center justify-between py-2 lg:px-4 px-2 h-full">
        <div className="flex items-center  lg:gap-4 sm:gap-2">
          <Button
            className="p-2 rounded-md bg-white hover:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-none lg:hidden"
            aria-label="Menu"
            onClick={() => setOpenHambug(!openHambug)}
          >
            <Menu color="black" />
          </Button>

          <Link
            href="/"
            className="flex gap-1 items-center sm:w-[123px] w-[250px] lg:w-[250px] h-12 box-border"
          >
            <div className="w-[70px] h-[50px] overflow-hidden">
              <Image
                src={Logo}
                alt="Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="sm:block">
              <h1 className="text-lg sm:text-2xl font-extrabold text-black pb-2.5 box-border">StudiMate</h1>
            </div>
          </Link>
        </div>

        <form
          onSubmit={handleSearch}
          className="hidden lg:flex items-center justify-center w-full max-w-2xl"
        >
          <div className="flex items-center w-full relative">
            <input
              type="text"
              placeholder="Search..."
              onKeyPress={handleKeyPress}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 border text-black overflow-hidden border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Button className="text-black bg-gray-100 h-[39px] rounded-l-none rounded-r-2xl hover:bg-white absolute right-0.5 top-1/2 -translate-y-1/2">
              <Search />
            </Button>
          </div>
          <Button className="ml-2 p-2 rounded-full bg-gray-300 hover:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
            <Mic color="black" />
          </Button>
        </form>

        <div className="flex items-center gap-2 md:gap-4">
          <Button
            className="lg:hidden p-2 rounded-full bg-white hover:bg-white shadow-none"
            onClick={() => setShowMobileSearch(!showMobileSearch)}
            aria-label="Search"
          >
            <Search color="black" />
          </Button>

          {!showMobileSearch && (
            <>
              <Button className="hidden lg:flex items-center space-x-2 bg-white hover:bg-white shadow-none">
                <VideoIcon color="black" />
              </Button>
              <Button className="hidden lg:flex items-center space-x-2 bg-white hover:bg-white shadow-none">
                <Bell color="black" />
              </Button>

              {user ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button className="flex items-center space-x-2 bg-white hover:bg-white shadow-none">
                      <Avatar className="border-black border-2 w-10 h-10">
                        <AvatarImage src={user.image} alt={user.name} />
                        <AvatarFallback>
                          {user.name?.charAt(0).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>
                      <Link
                        href={`/channel/${user?._id}`}
                        className="flex items-center space-x-2"
                      >
                        Your Channel
                      </Link>
                    </DropdownMenuItem>

                    <DropdownMenuItem>
                      <Link
                        href="/history"
                        className="flex items-center space-x-2"
                      >
                        History
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link
                        href="/liked"
                        className="flex items-center space-x-2"
                      >
                        Liked videos
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link
                        href="/watch-later"
                        className="flex items-center space-x-2"
                      >
                        Watch Later
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem /*onClick={logout}*/>
                      Sign Out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Button
                  className="lg:flex items-center space-x-2 sm:space-x-1"
                  //   onClick={handlegooglesignin}
                >
                  <User />
                  <span>Sign In</span>
                </Button>
              )}
            </>
          )}
        </div>
      </div>

      {/* Mobile/Tablet Search Bar - appears when toggled */}
      {showMobileSearch && (
        <div className="px-4 py-2 lg:hidden">
          <form onSubmit={handleSearch} className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Search YouTube"
              onKeyPress={handleKeyPress}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 px-4 py-2 border text-black border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              autoFocus
            />
            <Button
              type="button"
              className="p-2 rounded-full bg-gray-300 hover:bg-white"
              onClick={() => setShowMobileSearch(false)}
            >
              <span className="text-sm">Cancel</span>
            </Button>
          </form>
        </div>
      )}
    </header>
  );
}

export default Navbar;
