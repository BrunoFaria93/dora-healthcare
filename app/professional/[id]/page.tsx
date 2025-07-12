"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Star, MapPin, Clock, Phone, MessageCircle, Calendar, Shield, Award } from "lucide-react"
import Link from "next/link"

const professionalData = {
  id: 1,
  name: "Dra. Maria Silva",
  specialty: "Fisioterapeuta",
  distance: "1.2 km",
  price: "R$ 80/hora",
  rating: 4.8,
  reviews: 127,
  image: "/placeholder.svg?height=120&width=120",
  verified: true,
  description:
    "Fisioterapeuta especializada em reabilitação pós-cirúrgica e cuidados geriátricos. Mais de 10 anos de experiência no atendimento domiciliar.",
  education: [
    "Graduação em Fisioterapia - UNIFESP (2012)",
    "Especialização em Gerontologia - USP (2015)",
    "Pós-graduação em Fisioterapia Respiratória (2018)",
  ],
  certifications: ["CREFITO-3: 123456-F", "CPF: ***.***.***-**"],
  gallery: [
    "/placeholder.svg?height=100&width=100",
    "/placeholder.svg?height=100&width=100",
    "/placeholder.svg?height=100&width=100",
  ],
  availability: [
    { day: "Segunda", times: ["08:00", "14:00", "16:00"] },
    { day: "Terça", times: ["09:00", "15:00"] },
    { day: "Quarta", times: ["08:00", "10:00", "14:00", "16:00"] },
  ],
  reviews: [
    {
      name: "Ana Costa",
      rating: 5,
      comment: "Excelente profissional! Muito atenciosa e competente.",
      date: "15/12/2024",
    },
    {
      name: "João Silva",
      rating: 5,
      comment: "Recomendo! Ajudou muito na recuperação da minha mãe.",
      date: "10/12/2024",
    },
  ],
}

export default function ProfessionalProfile() {
  const [selectedTab, setSelectedTab] = useState("sobre")

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-10">
        <div className="max-w-md mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <Link href="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <h1 className="text-lg font-semibold text-gray-800">Perfil do Profissional</h1>
          </div>
        </div>
      </header>

      {/* Profile Header */}
      <div className="bg-white px-4 py-6">
        <div className="max-w-md mx-auto">
          <div className="flex gap-4">
            <Avatar className="h-24 w-24">
              <AvatarImage src={professionalData.image || "/placeholder.svg"} />
              <AvatarFallback>
                {professionalData.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>

            <div className="flex-1 space-y-2">
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-bold text-gray-800">{professionalData.name}</h2>
                {professionalData.verified && (
                  <Badge className="bg-teal-100 text-teal-700">
                    <Shield className="h-3 w-3 mr-1" />
                    Verificado
                  </Badge>
                )}
              </div>

              <p className="text-gray-600">{professionalData.specialty}</p>

              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span className="flex items-center gap-1">
                  <MapPin className="h-3 w-3" />
                  {professionalData.distance}
                </span>
                <span className="flex items-center gap-1">
                  <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  {professionalData.rating} ({professionalData.reviews.length} avaliações)
                </span>
              </div>

              <div className="text-lg font-bold text-teal-600">{professionalData.price}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="px-4 py-4 bg-white border-t">
        <div className="max-w-md mx-auto flex gap-3">
          <Link href="/booking" className="flex-1">
            <Button className="w-full bg-teal-600 hover:bg-teal-700">
              <Calendar className="h-4 w-4 mr-2" />
              Solicitar Atendimento
            </Button>
          </Link>
          <Button variant="outline" size="icon">
            <MessageCircle className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <Phone className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Content Tabs */}
      <div className="px-4 py-4">
        <div className="max-w-md mx-auto">
          <Tabs value={selectedTab} onValueChange={setSelectedTab}>
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="sobre">Sobre</TabsTrigger>
              <TabsTrigger value="agenda">Agenda</TabsTrigger>
              <TabsTrigger value="avaliacoes">Avaliações</TabsTrigger>
              <TabsTrigger value="fotos">Fotos</TabsTrigger>
            </TabsList>

            <TabsContent value="sobre" className="space-y-4 mt-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Descrição</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm leading-relaxed">{professionalData.description}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-base flex items-center gap-2">
                    <Award className="h-4 w-4" />
                    Formação
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {professionalData.education.map((edu, index) => (
                      <li key={index} className="text-sm text-gray-600">
                        • {edu}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Certificações</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {professionalData.certifications.map((cert, index) => (
                      <li key={index} className="text-sm text-gray-600">
                        • {cert}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="agenda" className="space-y-4 mt-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-base flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    Horários Disponíveis
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {professionalData.availability.map((day, index) => (
                      <div key={index}>
                        <h4 className="font-medium text-gray-800 mb-2">{day.day}</h4>
                        <div className="flex flex-wrap gap-2">
                          {day.times.map((time, timeIndex) => (
                            <Badge key={timeIndex} variant="outline" className="text-teal-600 border-teal-200">
                              {time}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="avaliacoes" className="space-y-4 mt-4">
              {professionalData.reviews.map((review, index) => (
                <Card key={index}>
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback>
                          {review.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-medium text-sm">{review.name}</span>
                          <div className="flex">
                            {[...Array(review.rating)].map((_, i) => (
                              <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 mb-1">{review.comment}</p>
                        <span className="text-xs text-gray-400">{review.date}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="fotos" className="mt-4">
              <div className="grid grid-cols-3 gap-2">
                {professionalData.gallery.map((photo, index) => (
                  <div key={index} className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                    <img
                      src={photo || "/placeholder.svg"}
                      alt={`Foto ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <div className="h-20"></div>
    </div>
  )
}
