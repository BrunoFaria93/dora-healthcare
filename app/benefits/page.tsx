"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Search, MapPin, Heart, Star, Gift, Percent } from "lucide-react"
import Link from "next/link"

const partners = [
  {
    id: 1,
    name: "Farmácia Saúde+",
    category: "Farmácia",
    discount: "15%",
    distance: "0.8 km",
    rating: 4.5,
    logo: "/placeholder.svg?height=60&width=60",
    description: "Medicamentos e produtos de saúde",
    isFavorite: false,
  },
  {
    id: 2,
    name: "Clínica Bem Estar",
    category: "Clínica",
    discount: "20%",
    distance: "1.2 km",
    rating: 4.8,
    logo: "/placeholder.svg?height=60&width=60",
    description: "Consultas e exames médicos",
    isFavorite: true,
  },
  {
    id: 3,
    name: "Laboratório Vida",
    category: "Laboratório",
    discount: "25%",
    distance: "2.1 km",
    rating: 4.6,
    logo: "/placeholder.svg?height=60&width=60",
    description: "Exames laboratoriais",
    isFavorite: false,
  },
  {
    id: 4,
    name: "Ótica Visão Clara",
    category: "Ótica",
    discount: "30%",
    distance: "1.5 km",
    rating: 4.4,
    logo: "/placeholder.svg?height=60&width=60",
    description: "Óculos e lentes de contato",
    isFavorite: false,
  },
]

const categories = [
  { name: "Todos", count: partners.length },
  { name: "Farmácia", count: 1 },
  { name: "Clínica", count: 1 },
  { name: "Laboratório", count: 1 },
  { name: "Ótica", count: 1 },
]

const coupons = [
  {
    id: 1,
    partner: "Farmácia Saúde+",
    code: "SAUDE15",
    discount: "15%",
    validUntil: "31/12/2024",
    used: false,
  },
  {
    id: 2,
    partner: "Clínica Bem Estar",
    code: "CONSULTA20",
    discount: "20%",
    validUntil: "15/01/2025",
    used: true,
  },
]

export default function BenefitsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("Todos")
  const [favorites, setFavorites] = useState<number[]>([2])

  const filteredPartners = partners.filter((partner) => {
    const matchesSearch =
      partner.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      partner.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "Todos" || partner.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const toggleFavorite = (partnerId: number) => {
    setFavorites((prev) => (prev.includes(partnerId) ? prev.filter((id) => id !== partnerId) : [...prev, partnerId]))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-md mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <Link href="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <h1 className="text-lg font-semibold text-gray-800">Clube de Benefícios</h1>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-teal-600 to-teal-700 px-4 py-6">
        <div className="max-w-md mx-auto text-center text-white">
          <Gift className="h-12 w-12 mx-auto mb-3" />
          <h2 className="text-xl font-bold mb-2">Descontos Exclusivos</h2>
          <p className="text-teal-100">Aproveite ofertas especiais em estabelecimentos parceiros</p>
        </div>
      </div>

      {/* Search */}
      <div className="px-4 py-4 bg-white border-b">
        <div className="max-w-md mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Buscar estabelecimentos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 py-4">
        <div className="max-w-md mx-auto">
          <Tabs defaultValue="parceiros" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="parceiros">Parceiros</TabsTrigger>
              <TabsTrigger value="cupons">Meus Cupons</TabsTrigger>
            </TabsList>

            <TabsContent value="parceiros" className="space-y-4 mt-4">
              {/* Categories */}
              <div className="flex gap-2 overflow-x-auto pb-2">
                {categories.map((category) => (
                  <Button
                    key={category.name}
                    variant={selectedCategory === category.name ? "default" : "outline"}
                    size="sm"
                    className={`whitespace-nowrap ${
                      selectedCategory === category.name ? "bg-teal-600 hover:bg-teal-700" : ""
                    }`}
                    onClick={() => setSelectedCategory(category.name)}
                  >
                    {category.name} ({category.count})
                  </Button>
                ))}
              </div>

              {/* Partners List */}
              <div className="space-y-3">
                {filteredPartners.map((partner) => (
                  <Card key={partner.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex gap-3">
                        <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
                          <img
                            src={partner.logo || "/placeholder.svg"}
                            alt={partner.name}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        <div className="flex-1 space-y-1">
                          <div className="flex items-start justify-between">
                            <div>
                              <h3 className="font-semibold text-gray-800">{partner.name}</h3>
                              <p className="text-sm text-gray-600">{partner.description}</p>
                            </div>
                            <Button variant="ghost" size="sm" onClick={() => toggleFavorite(partner.id)}>
                              <Heart
                                className={`h-4 w-4 ${
                                  favorites.includes(partner.id) ? "fill-red-500 text-red-500" : "text-gray-400"
                                }`}
                              />
                            </Button>
                          </div>

                          <div className="flex items-center gap-4 text-sm text-gray-500">
                            <span className="flex items-center gap-1">
                              <MapPin className="h-3 w-3" />
                              {partner.distance}
                            </span>
                            <span className="flex items-center gap-1">
                              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                              {partner.rating}
                            </span>
                          </div>

                          <div className="flex items-center justify-between">
                            <Badge className="bg-green-100 text-green-700">
                              <Percent className="h-3 w-3 mr-1" />
                              {partner.discount} OFF
                            </Badge>
                            <Button size="sm" className="bg-teal-600 hover:bg-teal-700">
                              Ver Cupom
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="cupons" className="space-y-4 mt-4">
              {coupons.map((coupon) => (
                <Card key={coupon.id} className={coupon.used ? "opacity-60" : ""}>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold text-gray-800">{coupon.partner}</h3>
                      <Badge
                        variant={coupon.used ? "secondary" : "default"}
                        className={coupon.used ? "" : "bg-green-100 text-green-700"}
                      >
                        {coupon.used ? "Usado" : "Disponível"}
                      </Badge>
                    </div>

                    <div className="bg-gray-50 p-3 rounded-lg mb-3">
                      <div className="text-center">
                        <p className="text-2xl font-bold text-teal-600">{coupon.discount}</p>
                        <p className="text-sm text-gray-600">Código: {coupon.code}</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Válido até: {coupon.validUntil}</span>
                      {!coupon.used && (
                        <Button size="sm" variant="outline">
                          Usar Cupom
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}

              {coupons.length === 0 && (
                <div className="text-center py-8">
                  <Gift className="h-12 w-12 text-gray-300 mx-auto mb-3" />
                  <p className="text-gray-500">Nenhum cupom disponível</p>
                  <p className="text-sm text-gray-400">Use nossos serviços para ganhar cupons!</p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
