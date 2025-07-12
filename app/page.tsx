"use client";

import { useState } from "react";
import {
  MapPin,
  Search,
  Star,
  Filter,
  Gift,
  MessageCircle,
  User,
  Home,
  Bell,
  Settings,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";

const professionals = [
  {
    id: 1,
    name: "Dra. Maria Silva",
    specialty: "Fisioterapeuta",
    distance: "1.2 km",
    price: "R$ 80/hora",
    rating: 4.8,
    reviews: 127,
    image: "/placeholder.svg?height=60&width=60",
    verified: true,
  },
  {
    id: 2,
    name: "Enf. João Santos",
    specialty: "Enfermeiro",
    distance: "2.1 km",
    price: "R$ 65/hora",
    rating: 4.9,
    reviews: 89,
    image: "/placeholder.svg?height=60&width=60",
    verified: true,
  },
  {
    id: 3,
    name: "Ana Costa",
    specialty: "Cuidadora",
    distance: "0.8 km",
    price: "R$ 45/hora",
    rating: 4.7,
    reviews: 156,
    image: "/placeholder.svg?height=60&width=60",
    verified: true,
  },
];

export default function HomePage() {
  const [searchLocation, setSearchLocation] = useState("");
  const [selectedService, setSelectedService] = useState("");

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

      {/* Search Section */}
      <div className="bg-white px-4 py-6 md:bg-gradient-to-br md:from-teal-50 md:via-white md:to-blue-50 md:py-20">
        <div className="max-w-md mx-auto space-y-4 md:max-w-6xl md:px-8 md:text-center">
          <div className="md:hidden relative">
            <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Digite sua localização"
              value={searchLocation}
              onChange={(e) => setSearchLocation(e.target.value)}
              className="pl-10 h-12 text-base rounded-lg border-gray-300 focus:ring-teal-500 focus:border-teal-500"
            />
            <Button
              size="icon"
              className="absolute right-2 top-2 bg-teal-600 hover:bg-teal-700 h-8 w-8 rounded-lg"
            >
              <Search className="h-4 w-4" />
            </Button>
          </div>
          <div className="hidden md:block">
            <h2 className="text-5xl font-bold text-gray-800 mb-6 leading-tight">
              Encontre os Melhores
              <span className="text-teal-600"> Profissionais de Saúde</span>
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              Conecte-se com profissionais qualificados e verificados próximos a
              você. Cuidado de qualidade na palma da sua mão.
            </p>
            <div className="flex justify-center gap-4 max-w-6xl mx-auto">
              <div className="relative flex-[3]">
                <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  placeholder="Digite sua localização"
                  value={searchLocation}
                  onChange={(e) => setSearchLocation(e.target.value)}
                  className="w-full pl-12 pr-16 h-14 text-base rounded-xl border-2 border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none shadow-lg"
                />
                <Button
                  size="icon"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-teal-600 hover:bg-teal-700 h-10 w-10 rounded-lg shadow-md"
                >
                  <Search className="h-5 w-5" />
                </Button>
              </div>
              <div className="flex items-center gap-2 flex-[2]">
                <Select
                  value={selectedService}
                  onValueChange={setSelectedService}
                >
                  <SelectTrigger className="w-full h-14 text-base rounded-xl border-2 border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 shadow-lg">
                    <SelectValue placeholder="Tipo de serviço" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="fisioterapia">Fisioterapia</SelectItem>
                    <SelectItem value="enfermagem">Enfermagem</SelectItem>
                    <SelectItem value="cuidador">Cuidador</SelectItem>
                    <SelectItem value="nutricao">Nutrição</SelectItem>
                  </SelectContent>
                </Select>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-14 w-14 rounded-xl border-2 border-gray-200 hover:bg-teal-50 hover:border-teal-300 shadow-lg"
                >
                  <Filter className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
          <div className="flex gap-2 md:hidden">
            <Select value={selectedService} onValueChange={setSelectedService}>
              <SelectTrigger className="flex-1 h-12 text-base rounded-lg border-gray-300 focus:ring-teal-500 focus:border-teal-500">
                <SelectValue placeholder="Tipo de serviço" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="fisioterapia">Fisioterapia</SelectItem>
                <SelectItem value="enfermagem">Enfermagem</SelectItem>
                <SelectItem value="cuidador">Cuidador</SelectItem>
                <SelectItem value="nutricao">Nutrição</SelectItem>
              </SelectContent>
            </Select>
            <Button
              variant="outline"
              size="icon"
              className="h-12 w-12 rounded-lg border-gray-300 hover:bg-teal-100"
            >
              <Filter className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Desktop Cards Section */}
      <div className="hidden md:block px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 gap-8">
            {/* Promotional Banner */}
            <div className="bg-gradient-to-r from-teal-100 to-blue-100 border border-teal-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-6">
                <div className="bg-teal-600 p-4 rounded-full">
                  <Gift className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-teal-800 mb-2">
                    Programa de Indicação
                  </h3>
                  <p className="text-teal-700 text-lg mb-3">
                    Ganhe R$ 20 por cada indicação bem-sucedida
                  </p>
                  <Button className="px-6 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-lg transition-colors">
                    Saiba mais
                  </Button>
                </div>
              </div>
            </div>

            {/* Match Inteligente */}
            <div className="bg-gradient-to-r from-purple-100 to-pink-100 border border-purple-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-6">
                <div className="bg-purple-600 p-4 rounded-full">
                  <span className="text-2xl">✨</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-purple-800 mb-2">
                    Match Inteligente
                  </h3>
                  <p className="text-purple-700 text-lg mb-3">
                    Encontre o profissional ideal para suas necessidades
                  </p>
                  <Button className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors">
                    Começar agora
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Cards */}
      <div className="px-4 py-2 md:hidden">
        <div className="max-w-md mx-auto space-y-4">
          <Card className="bg-gradient-to-r from-pink-100 to-orange-100 border border-pink-200">
            <CardContent className="p-4 flex items-center gap-3">
              <Gift className="h-8 w-8 text-pink-600" />
              <div>
                <h3 className="font-semibold text-pink-800">Indique e Ganhe</h3>
                <p className="text-sm text-pink-700">
                  Ganhe R$ 20 por indicação
                </p>
              </div>
            </CardContent>
          </Card>
          <Button
            variant="outline"
            className="w-full h-12 border-teal-200 text-teal-700 hover:bg-teal-50 bg-transparent"
          >
            ✨ Match Inteligente - Encontre o profissional ideal
          </Button>
        </div>
      </div>

      {/* Professionals List */}
      <div className="px-4 py-4 md:py-6">
        <div className="max-w-md mx-auto space-y-4 md:max-w-7xl md:px-6">
          <h2 className="text-lg font-semibold text-gray-800 md:text-2xl">
            Profissionais próximos
          </h2>
          <div className="md:grid md:grid-cols-3 md:gap-6">
            {professionals.map((professional) => (
              <Card
                key={professional.id}
                className="hover:shadow-md transition-shadow mb-4 md:mb-0"
              >
                <CardContent className="p-4 md:p-6">
                  <div className="flex gap-3 md:gap-4">
                    <Avatar className="h-16 w-16 md:h-20 md:w-20">
                      <AvatarImage
                        src={professional.image || "/placeholder.svg"}
                      />
                      <AvatarFallback>
                        {professional.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 space-y-1 md:space-y-2">
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-gray-800 md:text-lg">
                          {professional.name}
                        </h3>
                        {professional.verified && (
                          <Badge
                            variant="secondary"
                            className="bg-teal-100 text-teal-700 text-xs"
                          >
                            ✓ Verificado
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-gray-600 md:text-base">
                        {professional.specialty}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3 w-3 md:h-4 md:w-4" />
                          {professional.distance}
                        </span>
                        <span className="flex items-center gap-1">
                          <Star className="h-3 w-3 md:h-4 md:w-4 fill-yellow-400 text-yellow-400" />
                          {professional.rating} ({professional.reviews})
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-teal-600 md:text-lg">
                          {professional.price}
                        </span>
                        <Link href={`/professional/${professional.id}`}>
                          <Button
                            size="sm"
                            className="bg-teal-600 hover:bg-teal-700"
                          >
                            Ver perfil
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Navigation (Mobile Only) */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 md:hidden">
        <div className="max-w-md mx-auto px-4 py-2">
          <div className="flex justify-around">
            <Button
              variant="ghost"
              className="flex-col gap-1 h-auto py-2 text-teal-600"
            >
              <Home className="h-5 w-5" />
              <span className="text-xs">Início</span>
            </Button>
            <Button
              variant="ghost"
              className="flex-col gap-1 h-auto py-2 text-gray-500"
            >
              <Search className="h-5 w-5" />
              <span className="text-xs">Buscar</span>
            </Button>
            <Link href="/messages">
              <Button
                variant="ghost"
                className="flex-col gap-1 h-auto py-2 text-gray-500"
              >
                <MessageCircle className="h-5 w-5" />
                <span className="text-xs">Mensagens</span>
              </Button>
            </Link>
            <Button
              variant="ghost"
              className="flex-col gap-1 h-auto py-2 text-gray-500"
            >
              <User className="h-5 w-5" />
              <span className="text-xs">Perfil</span>
            </Button>
          </div>
        </div>
      </nav>

      {/* Bottom padding for fixed nav (Mobile Only) */}
      <div className="h-20 md:h-0"></div>
    </div>
  );
}
