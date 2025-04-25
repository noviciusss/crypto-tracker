import { useEffect } from 'react'
import { Provider } from 'react-redux'
import { store } from './store/store'
import CryptoTable from './components/CryptoTable'
import { WebSocketService } from './services/websocketService'
import { useDispatch } from 'react-redux'
import { setAssets } from './store/cryptoSlice'
import { cryptoList } from './components/mock'
import './App.css'

function AppContent() {
  const dispatch = useDispatch()

  useEffect(() => {
    // Initialize with mock data
    dispatch(setAssets(cryptoList))

    // Initialize WebSocket service
    const wsService = new WebSocketService(dispatch)
    wsService.start()

    return () => {
      wsService.stop()
    }
  }, [dispatch])

  return <CryptoTable />
}

function App() {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-gray-100">
        <div className="container mx-auto py-8">
          <h1 className="text-3xl font-bold mb-8 text-center">Crypto Price Tracker</h1>
          <AppContent />
        </div>
      </div>
    </Provider>
  )
}

export default App
