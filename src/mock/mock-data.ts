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
        imageIds: ['https://ldb-phinf.pstatic.net/20220316_150/1647394513104roSMP_JPEG/3.jpg?type=w1500_60_sharpen'],
        latitude: 37.55563529334659,
        longitude: 126.93394054827883
    } as GymDetail
}