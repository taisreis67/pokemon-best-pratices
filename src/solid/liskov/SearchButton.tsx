import React from 'react'
import BaseButton from './BaseButton'

const SearchButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = (props) => (
  <BaseButton {...props} className="flex-1 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-300">
    Buscar
  </BaseButton>
)

export default SearchButton
