"use client"
import {createContext, ReactNode, useEffect, useState} from "react";
import {Session, User} from "@supabase/auth-js";
import {createClient} from "@/lib/supabase/client";

interface AuthContextType {
    user: User | null;
    session: Session | null;
    loading: boolean;
    signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({children}: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const [session, setSession] = useState<Session | null>(null);
    const supabase = createClient()

    useEffect(() => {
        supabase.auth.getSession().then(({data: {session}}) => {
            setSession(session);
            setUser(session?.user ?? null);
            setLoading(false);
        })
    }, []);

    const value = {user, session, loading}

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}