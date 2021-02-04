export interface StaticResource {
  id: string
  name: string
  description: string
  url: string
  mimeType: string
  metadata: object
  staticResourceType: string
  attributionId: string
  userId: string
}

export const StaticResourceSeed: StaticResource = {
  id: '',
  name: '',
  description: '',
  url: '',
  mimeType: '',
  metadata: {},
  staticResourceType: '',
  attributionId: '',
  userId: ''
}
