"use client";

import { SidebarProvider, Sidebar } from '@/components/ui/sidebar';
import { SidebarContent,
    SidebarGroup, 
    SidebarGroupContent, 
    SidebarMenuItem,
    SidebarMenuButton,
    SidebarGroupLabel,
    SidebarGroupAction,
    SidebarFooter,
    SidebarMenu
} from '@/components/ui/sidebar';

import { RedirectToSignIn, SignOutButton } from "@clerk/nextjs";
import { Authenticated, Unauthenticated, useQuery } from "convex/react";
import Link from "next/link"
import {PlusIcon, User2Icon} from "lucide-react"
import { api } from "../../../convex/_generated/api";
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu';



export default function DashboardLayout({ children }: {
  children: React.ReactNode;
}) {
  return (
    <>
    <Authenticated><SidebarProvider><DashboardSidebar />{children}</SidebarProvider>
    </Authenticated>
    <Unauthenticated>
      <RedirectToSignIn/>
    </Unauthenticated>
    </>
  );
}

function DashboardSidebar() {
  const user = useQuery(api.functions.user.get);
  if (!user) {
    return null;
  }

    return (
      <Sidebar>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/friends">
                    <User2Icon />
                    Friends
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarGroupContent>
            <SidebarGroup>
                <SidebarGroupLabel>Direct Messages</SidebarGroupLabel>
                <SidebarGroupAction>
                    <PlusIcon/>
                    <span className="sr-only">New Direct Messages</span>

                </SidebarGroupAction>
            </SidebarGroup>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
            <SidebarGroup>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                    <SidebarMenuButton className="flex items-center">
                    <Avatar className="size-6">
                    <AvatarImage src={user.image} />
                    <AvatarFallback>{user.username[0]}</AvatarFallback>
                    </Avatar>
                    <p className="front-medium">{user.username}</p>
                   </SidebarMenuButton>
                   </DropdownMenuTrigger>
                   <DropdownMenuContent>
                    <DropdownMenuItem asChild>
                      <SignOutButton/>
                    </DropdownMenuItem>
                   </DropdownMenuContent>
                   </DropdownMenu>
                  </SidebarMenuItem>
                </SidebarMenu>

              </SidebarGroupContent>
            </SidebarGroup>
        </SidebarFooter>
      </Sidebar>
    );
  }


