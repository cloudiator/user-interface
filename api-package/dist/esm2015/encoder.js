import { HttpUrlEncodingCodec } from '@angular/common/http';
/**
* CustomHttpUrlEncodingCodec
* Fix plus sign (+) not encoding, so sent as blank space
* See: https://github.com/angular/angular/issues/11058#issuecomment-247367318
*/
export class CustomHttpUrlEncodingCodec extends HttpUrlEncodingCodec {
    encodeKey(k) {
        k = super.encodeKey(k);
        return k.replace(/\+/gi, '%2B');
    }
    encodeValue(v) {
        v = super.encodeValue(v);
        return v.replace(/\+/gi, '%2B');
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW5jb2Rlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Nsb3VkaWF0b3ItcmVzdC1hcGkvIiwic291cmNlcyI6WyJlbmNvZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFJLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRWhFOzs7O0VBSUU7QUFDRixNQUFNLE9BQU8sMEJBQTJCLFNBQVEsb0JBQW9CO0lBQ2hFLFNBQVMsQ0FBQyxDQUFTO1FBQ2YsQ0FBQyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkIsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBQ0QsV0FBVyxDQUFDLENBQVM7UUFDakIsQ0FBQyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekIsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNwQyxDQUFDO0NBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyIgICAgaW1wb3J0IHsgSHR0cFVybEVuY29kaW5nQ29kZWMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcblxyXG4vKipcclxuKiBDdXN0b21IdHRwVXJsRW5jb2RpbmdDb2RlY1xyXG4qIEZpeCBwbHVzIHNpZ24gKCspIG5vdCBlbmNvZGluZywgc28gc2VudCBhcyBibGFuayBzcGFjZVxyXG4qIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvMTEwNTgjaXNzdWVjb21tZW50LTI0NzM2NzMxOFxyXG4qL1xyXG5leHBvcnQgY2xhc3MgQ3VzdG9tSHR0cFVybEVuY29kaW5nQ29kZWMgZXh0ZW5kcyBIdHRwVXJsRW5jb2RpbmdDb2RlYyB7XHJcbiAgICBlbmNvZGVLZXkoazogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICBrID0gc3VwZXIuZW5jb2RlS2V5KGspO1xyXG4gICAgICAgIHJldHVybiBrLnJlcGxhY2UoL1xcKy9naSwgJyUyQicpO1xyXG4gICAgfVxyXG4gICAgZW5jb2RlVmFsdWUodjogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICB2ID0gc3VwZXIuZW5jb2RlVmFsdWUodik7XHJcbiAgICAgICAgcmV0dXJuIHYucmVwbGFjZSgvXFwrL2dpLCAnJTJCJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdfQ==