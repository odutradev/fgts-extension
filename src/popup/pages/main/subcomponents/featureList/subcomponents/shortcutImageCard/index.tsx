import { Box, Button, Switch, Typography } from '@mui/material'
import { MdCloudUpload, MdDelete } from 'react-icons/md'
import { useState, useRef } from 'react'

import { FeatureCard, FeatureDescription, FeatureHeader, FeatureInfo, FeatureTitle, FeatureTitleContainer } from '../../styles'
import { ImagePreview, UploadButton, PreviewContainer, DeleteButton } from './styles'
import { useFeatureToggle } from '@popup/hooks/useFeatureToggle'

import type { ChangeEvent } from 'react'

export const ShortcutImageCard = () => {
  const { features, handleToggle } = useFeatureToggle()
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = (e) => {
      const result = e.target?.result as string
      if (result) {
        void chrome.storage.local.set({ shortcutImageUrl: result })
      }
    }
    reader.readAsDataURL(file)
  }

  const handleDelete = () => {
    void chrome.storage.local.set({ shortcutImageUrl: '' })
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  return (
    <FeatureCard>
      <FeatureHeader>
        <FeatureInfo>
          <FeatureTitleContainer>
            <FeatureTitle>Atalho Ctrl+I</FeatureTitle>
          </FeatureTitleContainer>
          <FeatureDescription>Exibe uma imagem no centro da tela ao pressionar Ctrl+I</FeatureDescription>
        </FeatureInfo>
        <Switch
          checked={features.shortcutImage ?? false}
          onChange={() => handleToggle('shortcutImage')}
          size="small"
        />
      </FeatureHeader>
      {(features.shortcutImage ?? false) && (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '100%' }}>
          {features.shortcutImageUrl ? (
            <PreviewContainer>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <ImagePreview src={features.shortcutImageUrl} alt="Preview" />
                <Typography sx={{ fontSize: '0.72rem', color: '#aaaaaa' }}>Imagem Carregada</Typography>
              </Box>
              <DeleteButton onClick={handleDelete} size="small">
                <MdDelete size={16} />
              </DeleteButton>
            </PreviewContainer>
          ) : (
            <Box>
              <UploadButton onClick={() => fileInputRef.current?.click()} size="small">
                <MdCloudUpload size={16} />
                Enviar Imagem
              </UploadButton>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                style={{ display: 'none' }}
              />
            </Box>
          )}
        </Box>
      )}
    </FeatureCard>
  )
}