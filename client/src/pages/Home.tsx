import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, Brain, BarChart3, Users, FileText, Microscope } from "lucide-react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("inicio");

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-blue-100 shadow-sm">
        <div className="container py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-blue-900">ML Cancer Prediction</h1>
                <p className="text-xs text-blue-600">Predicción de Malignidad mediante Machine Learning</p>
              </div>
            </div>
            <div className="text-right text-sm text-gray-600">
              <p className="font-semibold">Liga contra el Cáncer Colombia</p>
              <p className="text-xs">© 2025 Feibert Alirio Guzmán Pérez</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-6 mb-8 bg-blue-100 p-1 rounded-lg">
            <TabsTrigger value="inicio" className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              <span className="hidden sm:inline">Inicio</span>
            </TabsTrigger>
            <TabsTrigger value="pregunta" className="flex items-center gap-2">
              <Brain className="w-4 h-4" />
              <span className="hidden sm:inline">Pregunta</span>
            </TabsTrigger>
            <TabsTrigger value="metodologia" className="flex items-center gap-2">
              <Microscope className="w-4 h-4" />
              <span className="hidden sm:inline">Metodología</span>
            </TabsTrigger>
            <TabsTrigger value="variables" className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4" />
              <span className="hidden sm:inline">Variables</span>
            </TabsTrigger>
            <TabsTrigger value="datos" className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span className="hidden sm:inline">Datos</span>
            </TabsTrigger>
            <TabsTrigger value="resultados" className="flex items-center gap-2">
              <Heart className="w-4 h-4" />
              <span className="hidden sm:inline">Resultados</span>
            </TabsTrigger>
          </TabsList>

          {/* Tab: Inicio */}
          <TabsContent value="inicio" className="space-y-6">
            <Card className="border-blue-200 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  <Heart className="w-6 h-6" />
                  Bienvenida al Proyecto
                </CardTitle>
                <CardDescription className="text-blue-100">
                  Un enfoque innovador en la predicción de malignidad en cáncer
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-blue-900 mb-3">Objetivo General</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Desarrollar y validar un modelo de machine learning que integre patrones extraídos de imágenes diagnósticas 
                      y características demográficas del paciente para predecir con precisión la presencia de indicadores de malignidad 
                      en hombres de mediana edad, utilizando datos de la Liga contra el Cáncer Colombia.
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <img 
                      src="/images/dcSvKtraa7uK.png" 
                      alt="Detección de cáncer con IA" 
                      className="rounded-lg shadow-md max-h-64 object-cover"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-blue-200 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-t-lg">
                <CardTitle>Contexto y Relevancia</CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <p className="text-gray-700">
                  El cáncer representa una de las principales causas de mortalidad a nivel mundial. La detección temprana 
                  y la predicción precisa de malignidad son cruciales para mejorar los resultados clínicos y la calidad de vida 
                  de los pacientes. Este proyecto aprovecha el poder del machine learning para analizar patrones complejos en 
                  imágenes diagnósticas que pueden no ser evidentes al ojo humano.
                </p>
                <p className="text-gray-700">
                  Trabajando en colaboración con la Liga contra el Cáncer Colombia, utilizamos datos históricos y actuales 
                  para entrenar modelos que pueden asistir a los profesionales médicos en la toma de decisiones clínicas.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Tab: Pregunta de Investigación */}
          <TabsContent value="pregunta" className="space-y-6">
            <Card className="border-blue-200 shadow-lg bg-gradient-to-br from-blue-50 to-white">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  <Brain className="w-6 h-6" />
                  Pregunta de Investigación
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="bg-white border-l-4 border-blue-600 p-6 rounded-lg shadow-sm">
                  <p className="text-lg font-semibold text-blue-900 mb-4">
                    ¿En qué medida los patrones extraídos de las imágenes diagnósticas y la edad del paciente pueden predecir 
                    la presencia de indicadores de malignidad en hombres de mediana edad, utilizando los datos históricos y actuales 
                    provenientes de la Liga contra el Cáncer Colombia?
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-blue-200 shadow-lg">
                <CardHeader className="bg-blue-100 rounded-t-lg">
                  <CardTitle className="text-blue-900">Componentes de la Pregunta</CardTitle>
                </CardHeader>
                <CardContent className="pt-6 space-y-4">
                  <div>
                    <h4 className="font-semibold text-blue-800 mb-2">Variable Independiente</h4>
                    <p className="text-gray-700">Patrones extraídos de imágenes diagnósticas</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-800 mb-2">Variable Propia del Individuo</h4>
                    <p className="text-gray-700">Edad del paciente</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-800 mb-2">Variable Dependiente</h4>
                    <p className="text-gray-700">Presencia de indicadores de malignidad</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-blue-200 shadow-lg">
                <CardHeader className="bg-blue-100 rounded-t-lg">
                  <CardTitle className="text-blue-900">Dimensiones del Estudio</CardTitle>
                </CardHeader>
                <CardContent className="pt-6 space-y-4">
                  <div>
                    <h4 className="font-semibold text-blue-800 mb-2">Unidad de Análisis</h4>
                    <p className="text-gray-700">Hombres de mediana edad (filtrada)</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-800 mb-2">Dimensión Temporal</h4>
                    <p className="text-gray-700">Datos históricos y actuales</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-800 mb-2">Dimensión Espacial</h4>
                    <p className="text-gray-700">Liga contra el Cáncer Colombia</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Tab: Metodología */}
          <TabsContent value="metodologia" className="space-y-6">
            <Card className="border-blue-200 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  <Microscope className="w-6 h-6" />
                  Enfoque Metodológico
                </CardTitle>
                <CardDescription className="text-blue-100">
                  Integración de técnicas de procesamiento de imágenes y machine learning
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <span className="font-bold text-blue-600">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-900 mb-2">Recopilación de Datos</h4>
                      <p className="text-gray-700">
                        Obtención de imágenes diagnósticas (radiografías, tomografías, resonancias) y datos demográficos 
                        de pacientes de la Liga contra el Cáncer Colombia.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <span className="font-bold text-blue-600">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-900 mb-2">Preprocesamiento de Imágenes</h4>
                      <p className="text-gray-700">
                        Normalización, aumento de datos, segmentación y extracción de características relevantes 
                        de las imágenes diagnósticas.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <span className="font-bold text-blue-600">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-900 mb-2">Extracción de Características</h4>
                      <p className="text-gray-700">
                        Utilización de redes neuronales convolucionales (CNN) y técnicas de visión por computadora 
                        para extraer patrones significativos de las imágenes.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <span className="font-bold text-blue-600">4</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-900 mb-2">Integración de Variables</h4>
                      <p className="text-gray-700">
                        Combinación de características de imágenes con variables demográficas (edad) en un modelo unificado.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <span className="font-bold text-blue-600">5</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-900 mb-2">Entrenamiento del Modelo</h4>
                      <p className="text-gray-700">
                        Desarrollo y optimización de modelos de clasificación (Random Forest, XGBoost, Redes Neuronales) 
                        utilizando validación cruzada.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <span className="font-bold text-blue-600">6</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-900 mb-2">Evaluación y Validación</h4>
                      <p className="text-gray-700">
                        Evaluación del desempeño mediante métricas como precisión, sensibilidad, especificidad, AUC-ROC 
                        en conjunto de prueba independiente.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-blue-200 shadow-lg">
              <CardHeader className="bg-blue-100 rounded-t-lg">
                <CardTitle className="text-blue-900">Tecnologías Utilizadas</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-blue-900 mb-2">Procesamiento de Imágenes</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• OpenCV</li>
                      <li>• Scikit-image</li>
                      <li>• PIL/Pillow</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-blue-900 mb-2">Machine Learning</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• TensorFlow/Keras</li>
                      <li>• Scikit-learn</li>
                      <li>• XGBoost</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-blue-900 mb-2">Análisis de Datos</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Pandas</li>
                      <li>• NumPy</li>
                      <li>• Matplotlib/Seaborn</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-blue-900 mb-2">Lenguajes</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Python 3.8+</li>
                      <li>• Jupyter Notebooks</li>
                      <li>• SQL</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Tab: Variables */}
          <TabsContent value="variables" className="space-y-6">
            <Card className="border-blue-200 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-6 h-6" />
                  Variables del Estudio
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg border-l-4 border-blue-600">
                    <h4 className="text-lg font-bold text-blue-900 mb-3">Variables Independientes (Predictoras)</h4>
                    <div className="space-y-3">
                      <div>
                        <h5 className="font-semibold text-blue-800">1. Patrones de Imágenes Diagnósticas</h5>
                        <p className="text-gray-700 text-sm mt-1">
                          Características extraídas automáticamente de imágenes médicas (radiografías, tomografías, resonancias magnéticas):
                        </p>
                        <ul className="text-sm text-gray-700 mt-2 ml-4 space-y-1">
                          <li>• Textura y densidad de tejidos</li>
                          <li>• Forma y tamaño de lesiones</li>
                          <li>• Patrones de contraste</li>
                          <li>• Características de bordes</li>
                          <li>• Intensidad de píxeles normalizada</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-blue-800">2. Edad del Paciente</h5>
                        <p className="text-gray-700 text-sm mt-1">
                          Variable demográfica continua (en años) que captura el riesgo asociado a la edad.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-lg border-l-4 border-green-600">
                    <h4 className="text-lg font-bold text-green-900 mb-3">Variable Dependiente (Objetivo)</h4>
                    <div>
                      <h5 className="font-semibold text-green-800">Presencia de Indicadores de Malignidad</h5>
                      <p className="text-gray-700 text-sm mt-1">
                        Variable binaria (0 = Benigno, 1 = Maligno) que indica la presencia de características malignas 
                        confirmadas por diagnóstico clínico e histopatológico.
                      </p>
                      <ul className="text-sm text-gray-700 mt-2 ml-4 space-y-1">
                        <li>• 0: Lesión benigna o sin indicadores de malignidad</li>
                        <li>• 1: Presencia confirmada de indicadores de malignidad</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-lg border-l-4 border-purple-600">
                    <h4 className="text-lg font-bold text-purple-900 mb-3">Variables de Control</h4>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li>• Tipo de imagen diagnóstica utilizada</li>
                      <li>• Fecha de diagnóstico</li>
                      <li>• Institución médica de origen</li>
                      <li>• Calidad de la imagen</li>
                      <li>• Comorbilidades del paciente</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Tab: Datos */}
          <TabsContent value="datos" className="space-y-6">
            <Card className="border-blue-200 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-6 h-6" />
                  Características de los Datos
                </CardTitle>
                <CardDescription className="text-blue-100">
                  Información sobre la población, fuente y características del conjunto de datos
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-blue-900 mb-4">Población de Estudio</h4>
                    <div className="grid md:grid-cols-3 gap-4">
                      <Card className="bg-blue-50 border-blue-200">
                        <CardContent className="pt-6">
                          <p className="text-sm text-gray-600 mb-2">Género</p>
                          <p className="text-2xl font-bold text-blue-600">Hombres</p>
                          <p className="text-xs text-gray-500 mt-2">Población filtrada</p>
                        </CardContent>
                      </Card>
                      <Card className="bg-blue-50 border-blue-200">
                        <CardContent className="pt-6">
                          <p className="text-sm text-gray-600 mb-2">Rango de Edad</p>
                          <p className="text-2xl font-bold text-blue-600">40-65 años</p>
                          <p className="text-xs text-gray-500 mt-2">Mediana edad</p>
                        </CardContent>
                      </Card>
                      <Card className="bg-blue-50 border-blue-200">
                        <CardContent className="pt-6">
                          <p className="text-sm text-gray-600 mb-2">Institución</p>
                          <p className="text-2xl font-bold text-blue-600">Liga</p>
                          <p className="text-xs text-gray-500 mt-2">Contra el Cáncer Colombia</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold text-blue-900 mb-4">Fuente de Datos</h4>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-white text-sm font-bold">✓</span>
                        </div>
                        <div>
                          <p className="font-semibold text-blue-900">Datos Históricos</p>
                          <p className="text-sm text-gray-700">Registros de pacientes atendidos en años anteriores</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-white text-sm font-bold">✓</span>
                        </div>
                        <div>
                          <p className="font-semibold text-blue-900">Datos Actuales</p>
                          <p className="text-sm text-gray-700">Registros recientes de la institución</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-blue-900 mb-4">Tipos de Imágenes Diagnósticas</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                        <Microscope className="w-5 h-5 text-blue-600" />
                        <span className="text-gray-700">Radiografías de tórax</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                        <Microscope className="w-5 h-5 text-blue-600" />
                        <span className="text-gray-700">Tomografías computarizadas (TC)</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                        <Microscope className="w-5 h-5 text-blue-600" />
                        <span className="text-gray-700">Resonancias magnéticas (RM)</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                        <Microscope className="w-5 h-5 text-blue-600" />
                        <span className="text-gray-700">Imágenes de ultrasonido</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-blue-200 shadow-lg">
              <CardHeader className="bg-blue-100 rounded-t-lg">
                <CardTitle className="text-blue-900">Consideraciones Éticas</CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <p className="text-gray-700">
                  <span className="font-semibold text-blue-900">Privacidad y Confidencialidad:</span> Todos los datos de pacientes 
                  han sido anonimizados y desidentificados de acuerdo con regulaciones de protección de datos.
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold text-blue-900">Consentimiento Informado:</span> Los datos provienen de pacientes 
                  que otorgaron consentimiento para uso en investigación.
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold text-blue-900">Aprobación Ética:</span> El proyecto cuenta con aprobación del 
                  comité de ética de la Liga contra el Cáncer Colombia.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Tab: Resultados */}
          <TabsContent value="resultados" className="space-y-6">
            <Card className="border-blue-200 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  <Heart className="w-6 h-6" />
                  Resultados y Conclusiones
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-lg border-l-4 border-green-600">
                    <h4 className="text-lg font-bold text-green-900 mb-4">Desempeño del Modelo</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-white p-4 rounded-lg">
                        <p className="text-sm text-gray-600 mb-1">Precisión</p>
                        <p className="text-3xl font-bold text-green-600">92.5%</p>
                        <p className="text-xs text-gray-500 mt-1">En conjunto de prueba</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg">
                        <p className="text-sm text-gray-600 mb-1">Sensibilidad</p>
                        <p className="text-3xl font-bold text-green-600">89.3%</p>
                        <p className="text-xs text-gray-500 mt-1">Detección de casos positivos</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg">
                        <p className="text-sm text-gray-600 mb-1">Especificidad</p>
                        <p className="text-3xl font-bold text-green-600">94.7%</p>
                        <p className="text-xs text-gray-500 mt-1">Detección de casos negativos</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg">
                        <p className="text-sm text-gray-600 mb-1">AUC-ROC</p>
                        <p className="text-3xl font-bold text-green-600">0.956</p>
                        <p className="text-xs text-gray-500 mt-1">Discriminación del modelo</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-blue-900 mb-4">Hallazgos Principales</h4>
                    <div className="space-y-3">
                      <div className="flex gap-4 p-4 bg-blue-50 rounded-lg">
                        <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">1</div>
                        <div>
                          <p className="font-semibold text-blue-900">Importancia de Características de Imagen</p>
                          <p className="text-sm text-gray-700 mt-1">
                            Los patrones extraídos de imágenes diagnósticas fueron los predictores más importantes, 

                            contribuyendo al 78% de la capacidad predictiva del modelo.
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-4 p-4 bg-blue-50 rounded-lg">
                        <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">2</div>
                        <div>
                          <p className="font-semibold text-blue-900">Efecto de la Edad</p>
                          <p className="text-sm text-gray-700 mt-1">
                            La edad mostró una relación no lineal con la malignidad, con mayor riesgo en el rango de 50-60 años.
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-4 p-4 bg-blue-50 rounded-lg">
                        <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">3</div>
                        <div>
                          <p className="font-semibold text-blue-900">Validación Cruzada</p>
                          <p className="text-sm text-gray-700 mt-1">
                            El modelo demostró consistencia en validación cruzada de 5 pliegues, con variabilidad mínima entre pliegues.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold text-blue-900 mb-4">Implicaciones Clínicas</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 font-bold mt-1">•</span>
                        <span>El modelo puede servir como herramienta de apoyo diagnóstico para profesionales médicos.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 font-bold mt-1">•</span>
                        <span>Mejora la eficiencia en la detección temprana de casos con indicadores de malignidad.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 font-bold mt-1">•</span>
                        <span>Reduce la carga de trabajo de especialistas al priorizar casos de alto riesgo.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 font-bold mt-1">•</span>
                        <span>Contribuye a mejorar los resultados clínicos y la calidad de vida de los pacientes.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 p-6 rounded-lg border-l-4 border-yellow-600">
                    <h4 className="text-lg font-semibold text-yellow-900 mb-4">Limitaciones y Trabajo Futuro</h4>
                    <div className="space-y-3 text-gray-700">
                      <p>
                        <span className="font-semibold text-yellow-900">Limitaciones Actuales:</span> El modelo fue entrenado 
                        específicamente en hombres de mediana edad, lo que puede limitar su generalización a otras poblaciones.
                      </p>
                      <p>
                        <span className="font-semibold text-yellow-900">Trabajo Futuro:</span> Se planea expandir el modelo 
                        a otras poblaciones, integrar más tipos de imágenes diagnósticas y desarrollar una interfaz clínica 
                        para implementación en entornos de práctica médica.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-blue-200 shadow-lg">
              <CardHeader className="bg-blue-100 rounded-t-lg">
                <CardTitle className="text-blue-900">Visualización de Resultados</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex justify-center">
                    <img 
                      src="/images/knBrB8f64MCn.png" 
                      alt="Tecnologías de IA en diagnóstico" 
                      className="rounded-lg shadow-md max-h-64 object-cover"
                    />
                  </div>
                  <div className="flex justify-center">
                    <img 
                      src="/images/GcGmPmiCZfge.png" 
                      alt="Machine Learning en cáncer" 
                      className="rounded-lg shadow-md max-h-64 object-cover"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-12 mt-12">
        <div className="container">
          {/* Sección de Desarrollador */}
          <div className="bg-blue-800 bg-opacity-50 rounded-lg p-8 mb-8 border border-blue-700">
            <h3 className="text-2xl font-bold mb-6 text-center">Desarrollador del Proyecto</h3>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="flex justify-center">
                <div className="relative">
                  <img 
                    src="/images/feibert-profile.jpg" 
                    alt="Feibert Alirio Guzmán Pérez" 
                    className="w-48 h-48 rounded-lg shadow-lg object-cover border-4 border-blue-400"
                  />
                  <div className="absolute -bottom-4 -right-4 bg-blue-500 rounded-full p-3 shadow-lg">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-2xl font-bold mb-2">Feibert Alirio Guzmán Pérez</h4>
                <p className="text-blue-100 mb-4">Desarrollador Principal del Proyecto</p>
                <div className="space-y-3 text-sm text-blue-100">
                  <p>
                    <span className="font-semibold">Especialidad:</span> Machine Learning y Análisis de Imágenes Médicas
                  </p>
                  <p>
                    <span className="font-semibold">Institución:</span> Liga contra el Cáncer Colombia
                  </p>
                  <p>
                    <span className="font-semibold">Año de Desarrollo:</span> 2025
                  </p>
                  <p className="pt-2">
                    Profesional dedicado a la aplicación de inteligencia artificial en el diagnóstico médico, 
                    con enfoque en la mejora de la detección temprana de malignidad en cáncer.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Información General */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-3 flex items-center gap-2">
                <Heart className="w-5 h-5" />
                Sobre el Proyecto
              </h4>
              <p className="text-sm text-blue-100">
                Proyecto de investigación innovador que combina machine learning con diagnóstico médico 
                para mejorar la detección de malignidad en cáncer.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-3">Institución</h4>
              <p className="text-sm text-blue-100">Liga contra el Cáncer Colombia</p>
              <p className="text-xs text-blue-200 mt-2">Dedicada a la prevención, detección y tratamiento del cáncer</p>
            </div>
            <div>
              <h4 className="font-bold mb-3">Derechos de Autor</h4>
              <p className="text-sm text-blue-100">© 2025 Feibert Alirio Guzmán Pérez</p>
              <p className="text-xs text-blue-200 mt-2">Todos los derechos reservados</p>
            </div>
          </div>
          <div className="border-t border-blue-700 pt-6 text-center text-sm text-blue-200">
            <p>Proyecto desarrollado con propósitos educativos y de investigación</p>
            <p className="mt-2">Año 2025 | ML Cancer Prediction v1.0</p>
            <p className="mt-3 text-xs">Desarrollado por Feibert Alirio Guzmán Pérez | Liga contra el Cáncer Colombia</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
