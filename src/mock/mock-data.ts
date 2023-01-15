export interface GymDetail {
    id: string
    name: string
    address: string
    description: string
    imageIds: string[]
    latitude: number
    longitude: number
}

export const mockData = {
    gymDetail: {
        id: '233',
        name: '더 클라임',
        address: '서울시 서초구 방배동 더 클라임',
        description: '넓은 암장입니다',
        imageIds: ['1234'],
        latitude: 37.55563529334659,
        longitude: 126.93394054827883
    } as GymDetail
}