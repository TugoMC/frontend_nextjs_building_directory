// src/app/auth/verification-sent/page.tsx
'use client'
import Link from 'next/link'

export default function VerificationSentPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full p-8 bg-white rounded-lg shadow text-center">
        <div className="mb-6">
          {/* Icône Email - vous pouvez la remplacer par une autre icône ou une image */}
          <svg
            className="mx-auto h-16 w-16 text-indigo-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 48 48"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M22 30h4a2 2 0 002-2v-6h-8v6a2 2 0 002 2zm-2-12h8m-4-4v4m11 4v8a10 10 0 01-10 10 10 10 0 01-10-10v-8a10 10 0 0110-10 10 10 0 0110 10z"
            />
          </svg>
        </div>
        
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Vérifiez votre email
        </h2>
        
        <p className="text-gray-600 mb-6">
          Un lien de confirmation a été envoyé à votre adresse email.
          Veuillez cliquer sur ce lien pour activer votre compte.
        </p>
        
        <div className="space-y-4">
          <p className="text-sm text-gray-500">
            Si vous n'avez pas reçu l'email, veuillez vérifier votre dossier spam.
          </p>
          
          <div className="pt-4 border-t border-gray-200">
            <Link
              href="/auth/login"
              className="text-indigo-600 hover:text-indigo-500 font-medium"
            >
              Retour à la page de connexion
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}