export class MapController {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    private readonly map: window.kakao.maps.Map;

    constructor(
        private readonly view: HTMLElement,
        latitude: number,
        longitude: number) {
        const options = { //지도를 생성할 때 필요한 기본 옵션
            center: new window.kakao.maps.LatLng(latitude, longitude), //지도의 중심좌표.
            level: 3 //지도의 레벨(확대, 축소 정도)
        };
        this.map = new window.kakao.maps.Map(view, options); //지도 생성 및 객체 리턴
    }

    public setMarker(latitude: number, longitude: number) {
        const position = new window.kakao.maps.LatLng(latitude, longitude);
        const marker = new window.kakao.maps.Marker({
            position: position
        });
        marker.setMap(this.map);
    }
}