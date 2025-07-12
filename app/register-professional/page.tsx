"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Upload, CheckCircle, AlertCircle } from "lucide-react"
import Link from "next/link"

const steps = [
  { id: 1, title: "Informações Pessoais", completed: false },
  { id: 2, title: "Documentos", completed: false },
  { id: 3, title: "Especialidades", completed: false },
  { id: 4, title: "Área de Atuação", completed: false },
  { id: 5, title: "Verificação", completed: false },
]

export default function RegisterProfessionalPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    // Step 1
    fullName: "",
    email: "",
    phone: "",
    cpf: "",
    birthDate: "",
    // Step 2
    documents: {
      identity: null,
      professionalRegistry: null,
      photo: null,
    },
    // Step 3
    profession: "",
    specialties: [],
    description: "",
    experience: "",
    // Step 4
    serviceArea: "",
    priceRange: "",
    availability: [],
    // Step 5
    termsAccepted: false,
    phoneVerified: false,
  })

  const nextStep = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="fullName">Nome Completo *</Label>
              <Input
                id="fullName"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                placeholder="Digite seu nome completo"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">E-mail *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="seu@email.com"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Telefone/WhatsApp *</Label>
              <Input
                id="phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="(11) 99999-9999"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="cpf">CPF *</Label>
              <Input
                id="cpf"
                value={formData.cpf}
                onChange={(e) => setFormData({ ...formData, cpf: e.target.value })}
                placeholder="000.000.000-00"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="birthDate">Data de Nascimento *</Label>
              <Input
                id="birthDate"
                type="date"
                value={formData.birthDate}
                onChange={(e) => setFormData({ ...formData, birthDate: e.target.value })}
              />
            </div>
          </div>
        )

      case 2:
        return (
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-800">Upload de Documentos</h3>
              <p className="text-sm text-gray-600">
                Todos os documentos são obrigatórios para verificação de identidade
              </p>
            </div>

            <div className="space-y-4">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                <h4 className="font-medium mb-1">Documento de Identidade</h4>
                <p className="text-sm text-gray-500 mb-3">RG ou CNH (frente e verso)</p>
                <Button variant="outline" size="sm">
                  Escolher Arquivo
                </Button>
              </div>

              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                <h4 className="font-medium mb-1">Registro Profissional</h4>
                <p className="text-sm text-gray-500 mb-3">CRM, COREN, CREFITO, etc.</p>
                <Button variant="outline" size="sm">
                  Escolher Arquivo
                </Button>
              </div>

              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                <h4 className="font-medium mb-1">Foto para Validação</h4>
                <p className="text-sm text-gray-500 mb-3">Selfie segurando o documento</p>
                <Button variant="outline" size="sm">
                  Tirar Foto
                </Button>
              </div>
            </div>
          </div>
        )

      case 3:
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="profession">Profissão *</Label>
              <Select
                value={formData.profession}
                onValueChange={(value) => setFormData({ ...formData, profession: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selecione sua profissão" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="fisioterapeuta">Fisioterapeuta</SelectItem>
                  <SelectItem value="enfermeiro">Enfermeiro</SelectItem>
                  <SelectItem value="cuidador">Cuidador</SelectItem>
                  <SelectItem value="nutricionista">Nutricionista</SelectItem>
                  <SelectItem value="terapeuta-ocupacional">Terapeuta Ocupacional</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Especialidades *</Label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  "Pós-cirúrgico",
                  "Cuidados de idosos",
                  "Reabilitação",
                  "Fisioterapia respiratória",
                  "Pediatria",
                  "Neurologia",
                ].map((specialty) => (
                  <div key={specialty} className="flex items-center space-x-2">
                    <Checkbox id={specialty} />
                    <Label htmlFor={specialty} className="text-sm">
                      {specialty}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Descrição Profissional *</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Descreva sua experiência e especialidades..."
                className="min-h-[100px]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="experience">Tempo de Experiência *</Label>
              <Select
                value={formData.experience}
                onValueChange={(value) => setFormData({ ...formData, experience: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selecione o tempo de experiência" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1-2">1-2 anos</SelectItem>
                  <SelectItem value="3-5">3-5 anos</SelectItem>
                  <SelectItem value="6-10">6-10 anos</SelectItem>
                  <SelectItem value="10+">Mais de 10 anos</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        )

      case 4:
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="serviceArea">Área de Atuação *</Label>
              <Input
                id="serviceArea"
                value={formData.serviceArea}
                onChange={(e) => setFormData({ ...formData, serviceArea: e.target.value })}
                placeholder="Ex: São Paulo - SP, raio de 10km"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="priceRange">Faixa de Preço por Hora *</Label>
              <Select
                value={formData.priceRange}
                onValueChange={(value) => setFormData({ ...formData, priceRange: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selecione sua faixa de preço" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="30-50">R$ 30 - R$ 50</SelectItem>
                  <SelectItem value="50-80">R$ 50 - R$ 80</SelectItem>
                  <SelectItem value="80-120">R$ 80 - R$ 120</SelectItem>
                  <SelectItem value="120+">Acima de R$ 120</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Disponibilidade *</Label>
              <div className="grid grid-cols-2 gap-2">
                {["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"].map((day) => (
                  <div key={day} className="flex items-center space-x-2">
                    <Checkbox id={day} />
                    <Label htmlFor={day} className="text-sm">
                      {day}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <Label>Horários Preferenciais</Label>
              <div className="grid grid-cols-3 gap-2">
                {["Manhã", "Tarde", "Noite"].map((period) => (
                  <div key={period} className="flex items-center space-x-2">
                    <Checkbox id={period} />
                    <Label htmlFor={period} className="text-sm">
                      {period}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )

      case 5:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Quase pronto!</h3>
              <p className="text-gray-600">Finalize seu cadastro para começar a receber solicitações</p>
            </div>

            <Card className="bg-yellow-50 border-yellow-200">
              <CardContent className="p-4">
                <div className="flex gap-3">
                  <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-yellow-800">Processo de Verificação</h4>
                    <p className="text-sm text-yellow-700 mt-1">
                      Seus documentos serão analisados em até 24 horas. Você receberá uma notificação quando aprovado.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="terms"
                  checked={formData.termsAccepted}
                  onCheckedChange={(checked) => setFormData({ ...formData, termsAccepted: checked as boolean })}
                />
                <Label htmlFor="terms" className="text-sm">
                  Aceito os{" "}
                  <Link href="/terms" className="text-teal-600 underline">
                    Termos de Serviço
                  </Link>{" "}
                  e{" "}
                  <Link href="/privacy" className="text-teal-600 underline">
                    Política de Privacidade
                  </Link>
                </Label>
              </div>

              <div className="border rounded-lg p-4">
                <h4 className="font-medium mb-2">Verificação por SMS/WhatsApp</h4>
                <p className="text-sm text-gray-600 mb-3">Enviaremos um código para o número: {formData.phone}</p>
                <Button variant="outline" size="sm">
                  Enviar Código
                </Button>
              </div>
            </div>
          </div>
        )

      default:
        return null
    }
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
            <h1 className="text-lg font-semibold text-gray-800">Cadastro Profissional</h1>
          </div>
        </div>
      </header>

      {/* Progress Steps */}
      <div className="bg-white px-4 py-4 border-b">
        <div className="max-w-md mx-auto">
          <div className="flex items-center justify-between mb-2">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    currentStep === step.id
                      ? "bg-teal-600 text-white"
                      : currentStep > step.id
                        ? "bg-green-500 text-white"
                        : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {currentStep > step.id ? "✓" : step.id}
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-8 h-0.5 ${currentStep > step.id ? "bg-green-500" : "bg-gray-200"}`} />
                )}
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-600 text-center">
            Etapa {currentStep} de {steps.length}: {steps[currentStep - 1]?.title}
          </p>
        </div>
      </div>

      {/* Form Content */}
      <div className="px-4 py-6">
        <div className="max-w-md mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">{steps[currentStep - 1]?.title}</CardTitle>
            </CardHeader>
            <CardContent>{renderStepContent()}</CardContent>
          </Card>

          {/* Navigation Buttons */}
          <div className="flex gap-3 mt-6">
            {currentStep > 1 && (
              <Button variant="outline" onClick={prevStep} className="flex-1 bg-transparent">
                Voltar
              </Button>
            )}
            <Button
              onClick={nextStep}
              className="flex-1 bg-teal-600 hover:bg-teal-700"
              disabled={currentStep === 5 && !formData.termsAccepted}
            >
              {currentStep === 5 ? "Finalizar Cadastro" : "Continuar"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
