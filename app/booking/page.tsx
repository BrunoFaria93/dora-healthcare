"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, Calendar, Clock, MapPin, CreditCard } from "lucide-react"
import Link from "next/link"

const availableSlots = [
  { date: "2024-12-20", day: "Hoje", times: ["14:00", "16:00"] },
  { date: "2024-12-21", day: "Amanhã", times: ["08:00", "10:00", "14:00", "16:00"] },
  { date: "2024-12-22", day: "Sábado", times: ["09:00", "11:00"] },
]

export default function BookingPage() {
  const [selectedDate, setSelectedDate] = useState("")
  const [selectedTime, setSelectedTime] = useState("")
  const [notes, setNotes] = useState("")
  const [step, setStep] = useState(1)

  const handleBooking = () => {
    if (selectedDate && selectedTime) {
      setStep(2)
    }
  }

  if (step === 2) {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white shadow-sm border-b">
          <div className="max-w-md mx-auto px-4 py-4">
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="sm" onClick={() => setStep(1)}>
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <h1 className="text-lg font-semibold text-gray-800">Pagamento</h1>
            </div>
          </div>
        </header>

        {/* Booking Summary */}
        <div className="px-4 py-6">
          <div className="max-w-md mx-auto space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Resumo do Atendimento</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-3">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src="/placeholder.svg?height=48&width=48" />
                    <AvatarFallback>MS</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">Dra. Maria Silva</h3>
                    <p className="text-sm text-gray-600">Fisioterapeuta</p>
                  </div>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-gray-400" />
                    <span>
                      {selectedDate === "2024-12-20" ? "Hoje" : selectedDate === "2024-12-21" ? "Amanhã" : "Sábado"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-gray-400" />
                    <span>{selectedTime}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-gray-400" />
                    <span>Atendimento domiciliar</span>
                  </div>
                </div>

                {notes && (
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <h4 className="font-medium text-sm mb-1">Observações:</h4>
                    <p className="text-sm text-gray-600">{notes}</p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Payment Details */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Detalhes do Pagamento</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span>Consulta (1 hora)</span>
                  <span>R$ 80,00</span>
                </div>
                <div className="flex justify-between">
                  <span>Taxa de serviço</span>
                  <span>R$ 8,00</span>
                </div>
                <div className="border-t pt-3 flex justify-between font-semibold">
                  <span>Total</span>
                  <span className="text-teal-600">R$ 88,00</span>
                </div>
              </CardContent>
            </Card>

            {/* Payment Methods */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <CreditCard className="h-4 w-4" />
                  Forma de Pagamento
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <div className="w-8 h-5 bg-gradient-to-r from-teal-400 to-blue-500 rounded mr-3"></div>
                  PIX - Pagamento instantâneo
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <CreditCard className="h-4 w-4 mr-3" />
                  Cartão de Crédito/Débito
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  💳 Link de Pagamento Externo
                </Button>
              </CardContent>
            </Card>

            <Button className="w-full bg-teal-600 hover:bg-teal-700 h-12">Confirmar e Pagar - R$ 88,00</Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-md mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <Link href="/professional/1">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <h1 className="text-lg font-semibold text-gray-800">Agendar Atendimento</h1>
          </div>
        </div>
      </header>

      {/* Professional Info */}
      <div className="bg-white px-4 py-4 border-b">
        <div className="max-w-md mx-auto">
          <div className="flex gap-3">
            <Avatar className="h-12 w-12">
              <AvatarImage src="/placeholder.svg?height=48&width=48" />
              <AvatarFallback>MS</AvatarFallback>
            </Avatar>
            <div>
              <h2 className="font-semibold text-gray-800">Dra. Maria Silva</h2>
              <p className="text-sm text-gray-600">Fisioterapeuta</p>
              <p className="text-sm font-semibold text-teal-600">R$ 80/hora</p>
            </div>
          </div>
        </div>
      </div>

      {/* Date Selection */}
      <div className="px-4 py-6">
        <div className="max-w-md mx-auto space-y-6">
          <div>
            <h3 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Escolha a data
            </h3>
            <div className="space-y-3">
              {availableSlots.map((slot) => (
                <Card
                  key={slot.date}
                  className={`cursor-pointer transition-colors ${
                    selectedDate === slot.date ? "ring-2 ring-teal-500 bg-teal-50" : "hover:bg-gray-50"
                  }`}
                  onClick={() => setSelectedDate(slot.date)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">{slot.day}</h4>
                        <p className="text-sm text-gray-500">{slot.date}</p>
                      </div>
                      <Badge variant="outline">{slot.times.length} horários</Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Time Selection */}
          {selectedDate && (
            <div>
              <h3 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Escolha o horário
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {availableSlots
                  .find((slot) => slot.date === selectedDate)
                  ?.times.map((time) => (
                    <Button
                      key={time}
                      variant={selectedTime === time ? "default" : "outline"}
                      className={selectedTime === time ? "bg-teal-600 hover:bg-teal-700" : ""}
                      onClick={() => setSelectedTime(time)}
                    >
                      {time}
                    </Button>
                  ))}
              </div>
            </div>
          )}

          {/* Notes */}
          {selectedTime && (
            <div>
              <h3 className="font-semibold text-gray-800 mb-4">Observações (opcional)</h3>
              <Textarea
                placeholder="Descreva detalhes sobre o atendimento, condições especiais, etc."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="min-h-[100px]"
              />
            </div>
          )}

          {/* Book Button */}
          {selectedDate && selectedTime && (
            <Button className="w-full bg-teal-600 hover:bg-teal-700 h-12" onClick={handleBooking}>
              Continuar para Pagamento
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
