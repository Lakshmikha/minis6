import React, { useState } from 'react';
import { Scissors, ArrowRight } from 'lucide-react';

interface AnalysisResult {
  position: number;
  sequence: string;
  efficiency: number;
}

function App() {
  const [dnaSequence, setDnaSequence] = useState('');
  const [cuttingAgent, setCuttingAgent] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState<AnalysisResult[]>([]);

  const handleAnalysis = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulated analysis results - in a real app, this would come from a backend
    const mockResults: AnalysisResult[] = [
      { position: 23, sequence: 'ATCG', efficiency: 0.89 },
      { position: 56, sequence: 'GCTA', efficiency: 0.76 },
      { position: 102, sequence: 'TAGC', efficiency: 0.95 },
      { position: 145, sequence: 'CGAT', efficiency: 0.82 },
    ];
    setResults(mockResults);
    setShowResults(true);
  };

  if (showResults) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-blue-600 px-6 py-4">
              <h2 className="text-xl font-semibold text-white">Analysis Results</h2>
            </div>
            <div className="p-6">
              <div className="mb-6">
                <h3 className="text-lg font-medium text-gray-900">Input Parameters:</h3>
                <p className="text-gray-600">DNA Sequence: {dnaSequence}</p>
                <p className="text-gray-600">Cutting Agent: {cuttingAgent}</p>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Position</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sequence</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Efficiency</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {results.map((result, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{result.position}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">{result.sequence}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          <div className="flex items-center">
                            <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                              <div 
                                className="bg-blue-600 h-2.5 rounded-full" 
                                style={{ width: `${result.efficiency * 100}%` }}
                              ></div>
                            </div>
                            <span>{(result.efficiency * 100).toFixed(1)}%</span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <button
                onClick={() => setShowResults(false)}
                className="mt-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                New Analysis
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <Scissors className="mx-auto h-12 w-12 text-blue-600" />
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">DNA Sequence Analysis</h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleAnalysis}>
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <label htmlFor="dna-sequence" className="block text-sm font-medium text-gray-700">
                DNA Sequence
              </label>
              <textarea
                id="dna-sequence"
                name="dna-sequence"
                rows={4}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Enter DNA sequence..."
                value={dnaSequence}
                onChange={(e) => setDnaSequence(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="cutting-agent" className="block text-sm font-medium text-gray-700">
                Cutting Agent
              </label>
              <input
                id="cutting-agent"
                name="cutting-agent"
                type="text"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Enter cutting agent..."
                value={cuttingAgent}
                onChange={(e) => setCuttingAgent(e.target.value)}
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Find Results
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;