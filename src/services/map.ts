import logger from "@/services/logger";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Coordinates {
    latitude: number
    longitude: number
}

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

    public setMarker(latitude: number, longitude: number, content: string): void {
        const position = new window.kakao.maps.LatLng(latitude, longitude);
        const marker = new window.kakao.maps.Marker({
            position: position
        });
        marker.setMap(this.map);
        this.map.setCenter(position);

        const infoWindow = new window.kakao.maps.InfoWindow({
            position: position,
            content : content
        });
        infoWindow.open(this.map, marker);
    }

    public async searchByAddress(address: string): Promise<Coordinates> {
        const geocoder = new window.kakao.maps.services.Geocoder();
        logger.verbose("MapController.searchByAddress", `beginning search address '${address}'`);
        return new Promise<Coordinates>((resolve, reject) => {
            geocoder.addressSearch(address, function(result: any, status: any) {
                // 정상적으로 검색이 완료됐으면
                if (status === window.kakao.maps.services.Status.OK) {
                    logger.verbose("MapController.searchByAddress", `received response '${result}'`);
                    resolve({
                        latitude: result[0].y,
                        longitude: result[0].x
                    });
                } else {
                    logger.verbose("MapController.searchByAddress", `search address failed '${status}'`);
                    reject();
                }
            });
        });
    }

}