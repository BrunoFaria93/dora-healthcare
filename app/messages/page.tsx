"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  ArrowLeft,
  Send,
  Phone,
  Video,
  MoreVertical,
  Home,
  Search,
  MessageCircle,
  User,
  Bell,
  Settings,
} from "lucide-react";
import Link from "next/link";

const conversations = [
  {
    id: 1,
    name: "Dra. Maria Silva",
    specialty: "Fisioterapeuta",
    lastMessage: "Perfeito! Nos vemos amanhã às 14h.",
    time: "10:30",
    unread: 0,
    status: "Agendamento confirmado",
    image: "/placeholder.svg?height=40&width=40",
    messages: [
      {
        id: 1,
        sender: "professional",
        message:
          "Olá! Recebi sua solicitação de atendimento. Posso confirmar para amanhã às 14h?",
        time: "10:25",
      },
      {
        id: 2,
        sender: "user",
        message: "Perfeito! Será em casa mesmo, correto?",
        time: "10:28",
      },
      {
        id: 3,
        sender: "professional",
        message:
          "Sim, exatamente. Vou levar todos os equipamentos necessários.",
        time: "10:29",
      },
      {
        id: 4,
        sender: "user",
        message: "Perfeito! Nos vemos amanhã às 14h.",
        time: "10:30",
      },
    ],
  },
  {
    id: 2,
    name: "Enf. João Santos",
    specialty: "Enfermeiro",
    lastMessage: "Boa tarde! Posso atender na quinta-feira.",
    time: "09:15",
    unread: 2,
    status: "Solicitação pendente",
    image: "/placeholder.svg?height=40&width=40",
    messages: [
      {
        id: 1,
        sender: "professional",
        message: "Boa tarde! Posso atender na quinta-feira às 10h?",
        time: "09:15",
      },
      {
        id: 2,
        sender: "user",
        message: "Ótimo! Pode ser nesse horário mesmo?",
        time: "09:17",
      },
    ],
  },
];

export default function MessagesPage() {
  const [selectedConversation, setSelectedConversation] = useState<
    number | null
  >(null);
  const [newMessage, setNewMessage] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [selectedConversation]);

  if (selectedConversation) {
    const conversation = conversations.find(
      (c) => c.id === selectedConversation
    );

    return (
      <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
        {/* Mobile Chat Header */}
        <header className="bg-white shadow-sm border-b md:hidden">
          <div className="max-w-md mx-auto px-4 py-4">
            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSelectedConversation(null)}
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <Avatar className="h-10 w-10">
                <AvatarImage src={conversation?.image || "/placeholder.svg"} />
                <AvatarFallback>
                  {conversation?.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h2 className="font-semibold text-gray-800">
                  {conversation?.name}
                </h2>
                <p className="text-sm text-gray-500">
                  {conversation?.specialty}
                </p>
              </div>
              <div className="flex gap-2">
                <Button variant="ghost" size="sm">
                  <Phone className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <Video className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </header>

        {/* Desktop Layout */}
        <div className="hidden md:flex md:flex-row md:w-full md:h-screen">
          {/* Desktop Conversation List */}
          <div className="md:w-1/3 md:bg-white md:shadow-r md:border-r md:flex md:flex-col">
            <div className="p-4 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <Link href="/">
                  <Button variant="ghost" size="sm">
                    <ArrowLeft className="h-6 w-6" />
                  </Button>
                </Link>
                <h1 className="text-xl font-semibold text-gray-800">
                  Mensagens
                </h1>
              </div>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {conversations.map((conversation) => (
                <Card
                  key={conversation.id}
                  className={`cursor-pointer hover:bg-teal-50 transition-colors ${
                    selectedConversation === conversation.id
                      ? "bg-teal-100"
                      : ""
                  }`}
                  onClick={() => setSelectedConversation(conversation.id)}
                >
                  <CardContent className="p-4">
                    <div className="flex gap-4">
                      <Avatar className="h-12 w-12">
                        <AvatarImage
                          src={conversation.image || "/placeholder.svg"}
                        />
                        <AvatarFallback>
                          {conversation.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-semibold text-gray-800 text-lg truncate">
                            {conversation.name}
                          </h3>
                          <span className="text-sm text-gray-400">
                            {conversation.time}
                          </span>
                        </div>
                        <p className="text-base text-gray-500 mb-2">
                          {conversation.specialty}
                        </p>
                        <p className="text-base text-gray-600 truncate mb-2">
                          {conversation.lastMessage}
                        </p>
                        <div className="flex items-center justify-between">
                          <Badge
                            variant={
                              conversation.status === "Agendamento confirmado"
                                ? "default"
                                : "secondary"
                            }
                            className={
                              conversation.status === "Agendamento confirmado"
                                ? "bg-teal-100 text-teal-700"
                                : "bg-orange-100 text-orange-700"
                            }
                          >
                            {conversation.status}
                          </Badge>
                          {conversation.unread > 0 && (
                            <Badge className="bg-red-500 text-white">
                              {conversation.unread}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Desktop Chat Area */}
          <div className="md:w-2/3 md:bg-gray-100 md:flex md:flex-col">
            <div className="p-4 bg-white border-b border-gray-200">
              <div className="flex items-center gap-4">
                <Avatar className="h-10 w-10">
                  <AvatarImage
                    src={conversation?.image || "/placeholder.svg"}
                  />
                  <AvatarFallback>
                    {conversation?.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h2 className="font-semibold text-gray-800 text-lg">
                    {conversation?.name}
                  </h2>
                  <p className="text-sm text-gray-500">
                    {conversation?.specialty}
                  </p>
                </div>
                <div className="flex gap-3">
                  <Button variant="ghost" size="sm">
                    <Phone className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Video className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <MoreVertical className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
            <div className="p-4 bg-teal-50 border-b border-teal-100">
              <Badge
                className={
                  conversation?.status === "Agendamento confirmado"
                    ? "bg-teal-500 text-white"
                    : "bg-orange-500 text-white"
                }
              >
                {conversation?.status}
              </Badge>
            </div>
            <div className="flex-1 overflow-y-auto p-6">
              <div className="space-y-4">
                {conversation?.messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${
                      message.sender === "user"
                        ? "justify-end"
                        : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-lg px-4 py-3 rounded-xl ${
                        message.sender === "user"
                          ? "bg-teal-600 text-white"
                          : "bg-white text-gray-800 shadow-sm"
                      }`}
                    >
                      <p className="text-base">{message.message}</p>
                      <p
                        className={`text-sm mt-2 ${
                          message.sender === "user"
                            ? "text-teal-100"
                            : "text-gray-500"
                        }`}
                      >
                        {message.time}
                      </p>
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>
            </div>
            <div className="p-4 bg-white border-t border-gray-200">
              <div className="flex gap-3">
                <Input
                  placeholder="Digite sua mensagem..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  className="flex-1 h-12 text-base"
                />
                <Button
                  size="icon"
                  className="bg-teal-600 hover:bg-teal-700 h-12 w-12"
                >
                  <Send className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Chat Area */}
        <div className="md:hidden flex flex-col flex-1 min-h-screen">
          {/* Status Banner */}
          <div className="bg-teal-50 border-b border-teal-100 px-4 py-2">
            <div className="max-w-md mx-auto">
              <Badge
                className={
                  conversation?.status === "Agendamento confirmado"
                    ? "bg-teal-500 text-white"
                    : "bg-orange-500 text-white"
                }
              >
                {conversation?.status}
              </Badge>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 px-4 py-4 overflow-y-auto">
            <div className="max-w-md mx-auto space-y-4">
              {conversation?.messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-xs px-4 py-2 rounded-lg ${
                      message.sender === "user"
                        ? "bg-teal-600 text-white"
                        : "bg-white border shadow-sm"
                    }`}
                  >
                    <p className="text-sm">{message.message}</p>
                    <p
                      className={`text-xs mt-1 ${
                        message.sender === "user"
                          ? "text-teal-100"
                          : "text-gray-400"
                      }`}
                    >
                      {message.time}
                    </p>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Message Input */}
          <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-4">
            <div className="max-w-md mx-auto flex gap-2">
              <Input
                placeholder="Digite sua mensagem..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                className="flex-1 h-12 text-base"
              />
              <Button
                size="icon"
                className="bg-teal-600 hover:bg-teal-700 h-12 w-12"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b md:fixed md:top-0 md:left-0 md:right-0 md:z-50 md:bg-white md:border-b md:shadow-lg">
        <div className="px-4 py-4 md:px-8">
          <div className="flex items-center justify-between">
            <div className="flex justify-center items-center gap-4">
              <img
                src="/dora-icon.png"
                alt="Dora Healthcare"
                className="h-8 w-auto md:h-12"
              />
              <h1 className="text-xl md:text-3xl font-bold text-gray-800 md:text-teal-700 font-[var(--font-poppins)]">
                Dora Healthcare
              </h1>
            </div>
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8 mr-20">
              <Link
                href="/"
                className="text-teal-600 font-medium hover:text-teal-700 transition-colors"
              >
                Início
              </Link>
              <Link
                href="/search"
                className="text-gray-600 font-medium hover:text-teal-700 transition-colors"
              >
                Buscar
              </Link>
              <Link
                href="/messages"
                className="text-gray-600 font-medium hover:text-teal-700 transition-colors"
              >
                Mensagens
              </Link>
              <Link
                href="/help"
                className="text-gray-600 font-medium hover:text-teal-700 transition-colors"
              >
                Ajuda
              </Link>
            </nav>

            {/* Desktop User Actions */}
            <div className="hidden md:flex items-center space-x-4">
              <Button
                variant="ghost"
                className="p-2 text-gray-600 hover:text-teal-700 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <Bell className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                className="p-2 text-gray-600 hover:text-teal-700 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <Settings className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                className="flex items-center px-4 py-2 border border-teal-200 text-teal-700 rounded-lg hover:bg-teal-50 transition-colors"
              >
                <User className="h-4 w-4 mr-2" />
                Perfil
              </Button>
            </div>

            {/* Mobile User Button */}
            <Button variant="ghost" className="md:hidden p-2">
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Spacer for fixed header on desktop */}
      <div className="hidden md:block h-20"></div>

      {/* Conversations List */}
      <div className="px-4 py-4 md:h-[calc(100vh-80px)] md:overflow-y-auto">
        <div className="max-w-md mx-auto space-y-2 md:max-w-7xl md:px-6 md:grid md:grid-cols-2 md:gap-6">
          {conversations.map((conversation) => (
            <Card
              key={conversation.id}
              className="cursor-pointer hover:shadow-md transition-shadow md:shadow-lg"
              onClick={() => setSelectedConversation(conversation.id)}
            >
              <CardContent className="p-4 md:p-6">
                <div className="flex gap-3 md:gap-4">
                  <Avatar className="h-12 w-12 md:h-14 md:w-14">
                    <AvatarImage
                      src={conversation.image || "/placeholder.svg"}
                    />
                    <AvatarFallback>
                      {conversation.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1 md:mb-2">
                      <h3 className="font-semibold text-gray-800 md:text-lg truncate">
                        {conversation.name}
                      </h3>
                      <span className="text-xs text-gray-400 md:text-sm">
                        {conversation.time}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 md:text-base mb-2">
                      {conversation.specialty}
                    </p>
                    <p className="text-sm text-gray-600 md:text-base truncate mb-2">
                      {conversation.lastMessage}
                    </p>
                    <div className="flex items-center justify-between">
                      <Badge
                        variant={
                          conversation.status === "Agendamento confirmado"
                            ? "default"
                            : "secondary"
                        }
                        className={
                          conversation.status === "Agendamento confirmado"
                            ? "bg-teal-100 text-teal-700 md:bg-teal-200 md:text-teal-800"
                            : "bg-orange-100 text-orange-700 md:bg-orange-200 md:text-orange-800"
                        }
                      >
                        {conversation.status}
                      </Badge>
                      {conversation.unread > 0 && (
                        <Badge className="bg-red-500 text-white text-xs">
                          {conversation.unread}
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 md:hidden">
        <div className="max-w-md mx-auto px-4 py-2">
          <div className="flex justify-around">
            <Link href="/">
              <Button
                variant="ghost"
                className="flex-col gap-1 h-auto py-2 text-teal-600"
              >
                <Home className="h-5 w-5" />
                <span className="text-xs">Início</span>
              </Button>
            </Link>
            <Link href="/search">
              <Button
                variant="ghost"
                className="flex-col gap-1 h-auto py-2 text-gray-500"
              >
                <Search className="h-5 w-5" />
                <span className="text-xs">Buscar</span>
              </Button>
            </Link>
            <Link href="/messages">
              <Button
                variant="ghost"
                className="flex-col gap-1 h-auto py-2 text-gray-500"
              >
                <MessageCircle className="h-5 w-5" />
                <span className="text-xs">Mensagens</span>
              </Button>
            </Link>
            <Link href="/profile">
              <Button
                variant="ghost"
                className="flex-col gap-1 h-auto py-2 text-gray-500"
              >
                <User className="h-5 w-5" />
                <span className="text-xs">Perfil</span>
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Bottom padding for fixed nav (Mobile Only) */}
      <div className="h-20 md:h-0"></div>
    </div>
  );
}
