import { ElNotification } from 'element-plus'
import type { notifyTypes } from '@/@types/notification'

export interface ShowNotifyParams {
  title: string
  message?: string
  type?: notifyTypes
}

export function showNotify({ title, message, type = 'info' }: ShowNotifyParams) {
  ElNotification({
    title,
    message,
    type,
  })
}

export function successNotification(message: string, title = 'Success') {
  return showNotify({ title, message, type: 'success' })
}

export function errorNotification(message: string, title = 'Error') {
  return showNotify({ title, message, type: 'error' })
}

export function warnNotification(message: string, title = 'Warning') {
  return showNotify({ title, message, type: 'warning' })
}

export function infoNotification(message: string, title = 'Information') {
  return showNotify({ title, message, type: 'info' })
}
