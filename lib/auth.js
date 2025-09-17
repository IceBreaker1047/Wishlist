import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Reddit from "next-auth/providers/reddit";
import Apple from "next-auth/providers/apple"
export const { auth, handlers, signIn } = NextAuth({ providers: [Google, Reddit, Apple] });