// src/app/auth/verify-email/[token]/page.tsx
'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function VerifyEmailPage({ params }: { params: { token: string } }) {
  const router = useRouter()
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading')
  const [message, setMessage] = useState('')

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/auth/verify-email/${params.token}/`, {
          method: 'GET',
        })
        const data = await response.json()

        if (response.ok) {
          setStatus('success')
          setMessage(data.message)
          // Rediriger vers la page de connexion après 3 secondes
          setTimeout(() => {
            router.push('/auth/login')
          }, 3000)
        } else {
          setStatus('error')
          setMessage(data.error || 'Une erreur est survenue')
        }
      } catch (error) {
        setStatus('error')
        setMessage('Erreur de connexion au serveur')
      }
    }

    verifyEmail()
  }, [params.token, router])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow">
        {status === 'loading' && (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-2">Vérification en cours...</h2>
            <p>Veuillez patienter pendant que nous vérifions votre email.</p>
          </div>
        )}
        
        {status === 'success' && (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-green-600 mb-2">Email vérifié !</h2>
            <p>{message}</p>
            <p className="mt-2 text-gray-600">
              Vous allez être redirigé vers la page de connexion...
            </p>
          </div>
        )}
        
        {status === 'error' && (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-red-600 mb-2">Erreur</h2>
            <p>{message}</p>
            <button
              onClick={() => router.push('/auth/login')}
              className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
            >
              Aller à la page de connexion
            </button>
          </div>
        )}
      </div>
    </div>
  )
}