export interface Payment {
    title: string
    price: number
}

export interface Address {
    roadAddress: string
    jibunAddress: string
    sido: string
    sigungu: string
    sigunguCode: string
    roadName: string
    detailedAddress: string
}

export interface Location {
    longitude: number
    latitude: number
}

export interface Tag {
    id: string
    name: string
}

export interface Contact {
    email: string
    phone: string
}

export interface OpeningHours {
    title: string
    value: string
}

export interface Gym {
    id: string
    thumbnailUrl: string
    address: Address
    name: string
    lastSettingAt: string
    likeCount: number
    isLikedByMe: boolean
}

export interface GymDetails extends Gym {
    imageUrls: string[]
    description: string
    tags: Tag[]
    payments: Payment[]
    location: Location
    openingHours: OpeningHours[]
    convenience: string[]
    difficulties: string[]
    contact: Contact
}
