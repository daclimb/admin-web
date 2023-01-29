import {Address, Tag, Location, Gym, GymDetails} from "@/model/gym";

const tag: Tag = {
    id: '232',
    name: '태그'
}

const address: Address = {
    roadName: '신사대로',
    roadAddress: '서울 강남구 신사대로',
    sido: '서울',
    sigungu: '강남구',
    sigunguCode: '12345',
    jibunAddress: '서울 강남구 신사동 529-4',
    detailedAddress: 'B1'
}

const location: Location = {
    latitude: 37.55563529334659,
    longitude: 126.93394054827883
}

const gym: Gym = {
    id: '123',
    thumbnailUrl: 'https://ldb-phinf.pstatic.net/20220316_150/1647394513104roSMP_JPEG/3.jpg?type=w1500_60_sharpen',
    address: address,
    name: '더자스클라이밍짐',
    lastSettingAt: '2022-12-12',
    likeCount: 0,
    isLikedByMe: false
}

export const gymDetails: GymDetails = {
    imageUrls: [
        'https://ldb-phinf.pstatic.net/20220316_150/1647394513104roSMP_JPEG/3.jpg?type=w1500_60_sharpen',
        'https://blog.kakaocdn.net/dn/b0HpbI/btqDVWkSIwM/KJLtiHUK1wfilfIUXLBKKk/img.png'
    ],
    description: 'Tanahair is the friendliest and most efficient company I have ever used. The whole thing takes time to introduce the product and as a result puts forward only the best opportunities that really suit you. they help from start to finish to create a great product identity for your company',
    tags: [tag, tag],
    payments: [
        {
            title: '1일 체험권(이용+암벽화)',
            price: 10000
        },
        {
            title: '1일 체험권(이용+암벽화+강습)',
            price: 16000
        },
        {
            title: '1개월 초보 강습반(주 3회)',
            price: 310000
        }
    ],
    location: location,
    openingHours: [
        {
            title: '평일',
            value: '10:00 ~ 22:00'
        },
        {
            title: '주말',
            value: '10:00 ~ 22:00'
        },
        {
            title: '공휴일',
            value: '10:00 ~ 22:00'
        }
    ],
    convenience: ['샤워시설', '세족대', '수건', '락커', '요가매트'],
    difficulties: ['#FF6161', '#FFBD71', '#FFE483', '#AAEA93', '#7BE1FF', '#4A8BED', '#9980FF'],
    contact: {
        phone: '02-1111-1111',
        email: 'thejas_gym'
    },
    ...gym
}
