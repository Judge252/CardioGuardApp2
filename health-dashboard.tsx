import { Activity, Heart, Zap, TrendingUp, User, AlertTriangle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export default function Component() {
  const healthData = {
    thalach: 170,
    chestPain: 0,
    restEcg: 0,
    oldpeak: 0.2,
    slope: 2,
    age: 24,
  }

  const getChestPainType = (value: number) => {
    const types = ["Typical Angina", "Atypical Angina", "Non-Anginal Pain", "Asymptomatic"]
    return types[value] || "Unknown"
  }

  const getEcgType = (value: number) => {
    const types = ["Normal", "ST-T Wave Abnormality", "Left Ventricular Hypertrophy"]
    return types[value] || "Unknown"
  }

  const getSlopeType = (value: number) => {
    const types = ["Upsloping", "Flat", "Downsloping"]
    return types[value] || "Unknown"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">CardioGuard</h1>
                <p className="text-sm text-gray-600">Personal Health Dashboard</p>
              </div>
            </div>
            <Badge variant="secondary" className="text-sm px-4 py-2">
              Last Updated: 1 hour ago
            </Badge>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Health Status Banner */}
        <div className="mb-8">
          <Card className="bg-gradient-to-r from-green-500 to-green-600 border-0 text-white">
            <CardContent className="p-8 text-center">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-white/20 p-4 rounded-full">
                  <Heart className="h-12 w-12 text-white" />
                </div>
              </div>
              <h2 className="text-4xl font-bold mb-2">HEALTHY</h2>
              <p className="text-xl opacity-90">Your cardiovascular health indicators are within normal ranges</p>
              <div className="mt-4 flex items-center justify-center space-x-2">
                <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                <span className="text-sm">Real-time monitoring active</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Heart Attack Risk Assessment */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card className="bg-gradient-to-r from-blue-400 to-blue-500 border-0 text-white">
            <CardHeader>
              <CardTitle className="text-xl font-semibold flex items-center space-x-2">
                <Heart className="h-6 w-6" />
                <span>Heart Attack Risk</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold mb-2">2.1%</div>
              <p className="text-lg opacity-90 mb-4">Very Low Risk</p>
              <div className="bg-white/20 rounded-full h-3 mb-3">
                <div className="bg-white rounded-full h-3 w-[2.1%] transition-all duration-1000"></div>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="opacity-80">Risk Factors:</p>
                  <ul className="mt-1 space-y-1">
                    <li>• Age: Excellent (24y)</li>
                    <li>• Chest Pain: None</li>
                    <li>• ECG: Normal</li>
                  </ul>
                </div>
                <div>
                  <p className="opacity-80">Protective Factors:</p>
                  <ul className="mt-1 space-y-1">
                    <li>• Young age</li>
                    <li>• Strong heart rate</li>
                    <li>• No symptoms</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-blue-500 to-blue-600 border-0 text-white">
            <CardHeader>
              <CardTitle className="text-xl font-semibold flex items-center space-x-2">
                <User className="h-6 w-6" />
                <span>Patient Condition</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold mb-2">EXCELLENT</div>
              <p className="text-lg opacity-90 mb-4">Optimal cardiovascular health</p>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Overall Health Score</span>
                  <span className="font-semibold">94/100</span>
                </div>
                <Progress value={94} className="h-2 bg-white/20" />
                <div className="grid grid-cols-2 gap-4 text-sm mt-4">
                  <div>
                    <p className="opacity-80 mb-2">Condition Status:</p>
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-300 rounded-full"></div>
                        <span className="text-xs">Cardiovascular: Excellent</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-300 rounded-full"></div>
                        <span className="text-xs">Physical Fitness: Superior</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-300 rounded-full"></div>
                        <span className="text-xs">Risk Profile: Very Low</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="opacity-80 mb-2">Next Steps:</p>
                    <ul className="text-xs space-y-1">
                      <li>• Maintain current lifestyle</li>
                      <li>• Regular exercise routine</li>
                      <li>• Annual check-ups</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Health Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Heart Rate */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Maximum Heart Rate</CardTitle>
              <Activity className="h-5 w-5 text-red-500" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-gray-900 mb-2">{healthData.thalach}</div>
              <p className="text-sm text-gray-600 mb-3">beats per minute</p>
              <Progress value={85} className="h-2" />
              <p className="text-xs text-gray-500 mt-2">Excellent cardiovascular fitness</p>
            </CardContent>
          </Card>

          {/* Age */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Age</CardTitle>
              <User className="h-5 w-5 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-gray-900 mb-2">{healthData.age}</div>
              <p className="text-sm text-gray-600 mb-3">years old</p>
              <Badge variant="outline" className="text-xs">
                Prime Health Age
              </Badge>
            </CardContent>
          </Card>

          {/* Chest Pain */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Chest Pain Type</CardTitle>
              <AlertTriangle className="h-5 w-5 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900 mb-2">Type {healthData.chestPain}</div>
              <p className="text-sm text-gray-600 mb-3">{getChestPainType(healthData.chestPain)}</p>
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                No Symptoms
              </Badge>
            </CardContent>
          </Card>

          {/* Rest ECG */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Resting ECG</CardTitle>
              <Zap className="h-5 w-5 text-yellow-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900 mb-2">Level {healthData.restEcg}</div>
              <p className="text-sm text-gray-600 mb-3">{getEcgType(healthData.restEcg)}</p>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-xs text-gray-600">Normal rhythm</span>
              </div>
            </CardContent>
          </Card>

          {/* Oldpeak */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">ST Depression (Oldpeak)</CardTitle>
              <TrendingUp className="h-5 w-5 text-purple-500" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-gray-900 mb-2">{healthData.oldpeak}</div>
              <p className="text-sm text-gray-600 mb-3">mm depression</p>
              <Progress value={10} className="h-2" />
              <p className="text-xs text-gray-500 mt-2">Minimal depression detected</p>
            </CardContent>
          </Card>

          {/* Slope */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Exercise ST Slope</CardTitle>
              <TrendingUp className="h-5 w-5 text-indigo-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900 mb-2">Type {healthData.slope}</div>
              <p className="text-sm text-gray-600 mb-3">{getSlopeType(healthData.slope)}</p>
              <Badge variant="outline" className="bg-blue-50 text-blue-700">
                Optimal Response
              </Badge>
            </CardContent>
          </Card>
        </div>

        {/* Summary Section */}
        <Card className="bg-white">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-gray-900">Health Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Key Indicators</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Heart attack risk: 2.1% (Very Low)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Patient condition: Excellent (94/100)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Maximum heart rate: {healthData.thalach} bpm (Excellent)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>No chest pain symptoms reported</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Normal resting ECG results</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Minimal ST depression ({healthData.oldpeak}mm)</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Recommendations</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Continue regular cardiovascular exercise</li>
                  <li>• Maintain current healthy lifestyle</li>
                  <li>• Monitor heart rate during exercise</li>
                  <li>• Schedule routine check-ups every 12 months</li>
                  <li>• Consider stress management techniques</li>
                  <li>• Maintain healthy diet and weight</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
