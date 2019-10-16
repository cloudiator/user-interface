import {Injectable} from '@angular/core';
import {IpAddressType, IpVersion, Node, NodeService} from 'cloudiator-rest-api';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NodeDataService {

  constructor(private nodeApiService: NodeService) {
  }

  /**
   * Mapping function that fixes uppercase attributes, sent by the API.
   * @param {Node} node
   * @return {Node}
   */
  private static ipAddressMap(node: Node) {
    const ips = node.ipAddresses.map(ip => {
      // @ts-ignore
      if (ip.IpAddressType && ip.IpVersion) {
        // @ts-ignore
        ip.ipAddressType = ip.IpAddressType;
        // @ts-ignore
        ip.ipVersion = ip.IpVersion;
        // @ts-ignore
        delete ip.IpVersion;
        // @ts-ignore
        delete ip.IpAddressType;
      }
      return ip;
    });
    return <Node>{
      ipAddresses: ips,
      ...node
    };

  }

  public getNodes(): Observable<Node[]> {
    return this.nodeApiService.findNodes()
      .pipe(map((nodes: Node[]) => nodes.map(NodeDataService.ipAddressMap)));
  }

  public getNode(id: string): Observable<Node> {
    return this.nodeApiService.getNode(id)
      .pipe(map(NodeDataService.ipAddressMap));
  }
}
