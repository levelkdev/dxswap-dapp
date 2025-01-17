/* tslint:disable */
/* eslint-disable */
/**
 * Movr Aggregator API
 * The Movr Aggregator API description
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import * as runtime from '../runtime'
import {
  Balance,
  BalanceFromJSON,
  BalanceToJSON,
  TokenBalanceReponseDTO,
  TokenBalanceReponseDTOFromJSON,
  TokenBalanceReponseDTOToJSON,
} from '../models'

export interface BalancesControllerGetBalanceRequest {
  tokenAddress: string
  chainId: string
  userAddress: string
}

export interface BalancesControllerGetBalancesRequest {
  userAddress: string
  aPIKEY?: string
}

/**
 *
 */
export class BalancesApi extends runtime.BaseAPI {
  /**
   */
  async balancesControllerGetBalanceRaw(
    requestParameters: BalancesControllerGetBalanceRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<TokenBalanceReponseDTO>> {
    if (requestParameters.tokenAddress === null || requestParameters.tokenAddress === undefined) {
      throw new runtime.RequiredError(
        'tokenAddress',
        'Required parameter requestParameters.tokenAddress was null or undefined when calling balancesControllerGetBalance.'
      )
    }

    if (requestParameters.chainId === null || requestParameters.chainId === undefined) {
      throw new runtime.RequiredError(
        'chainId',
        'Required parameter requestParameters.chainId was null or undefined when calling balancesControllerGetBalance.'
      )
    }

    if (requestParameters.userAddress === null || requestParameters.userAddress === undefined) {
      throw new runtime.RequiredError(
        'userAddress',
        'Required parameter requestParameters.userAddress was null or undefined when calling balancesControllerGetBalance.'
      )
    }

    const queryParameters: any = {}

    if (requestParameters.tokenAddress !== undefined) {
      queryParameters['tokenAddress'] = requestParameters.tokenAddress
    }

    if (requestParameters.chainId !== undefined) {
      queryParameters['chainId'] = requestParameters.chainId
    }

    if (requestParameters.userAddress !== undefined) {
      queryParameters['userAddress'] = requestParameters.userAddress
    }

    const headerParameters: runtime.HTTPHeaders = {}

    const response = await this.request(
      {
        path: `/v2/balances/token-balance`,
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    )

    return new runtime.JSONApiResponse(response, jsonValue => TokenBalanceReponseDTOFromJSON(jsonValue))
  }

  /**
   */
  async balancesControllerGetBalance(
    requestParameters: BalancesControllerGetBalanceRequest,
    initOverrides?: RequestInit
  ): Promise<TokenBalanceReponseDTO> {
    const response = await this.balancesControllerGetBalanceRaw(requestParameters, initOverrides)
    return await response.value()
  }

  /**
   */
  async balancesControllerGetBalancesRaw(
    requestParameters: BalancesControllerGetBalancesRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<Balance>> {
    if (requestParameters.userAddress === null || requestParameters.userAddress === undefined) {
      throw new runtime.RequiredError(
        'userAddress',
        'Required parameter requestParameters.userAddress was null or undefined when calling balancesControllerGetBalances.'
      )
    }

    const queryParameters: any = {}

    if (requestParameters.userAddress !== undefined) {
      queryParameters['userAddress'] = requestParameters.userAddress
    }

    const headerParameters: runtime.HTTPHeaders = {}

    if (requestParameters.aPIKEY !== undefined && requestParameters.aPIKEY !== null) {
      headerParameters['API-KEY'] = String(requestParameters.aPIKEY)
    }

    const response = await this.request(
      {
        path: `/v2/balances`,
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    )

    return new runtime.JSONApiResponse(response, jsonValue => BalanceFromJSON(jsonValue))
  }

  /**
   */
  async balancesControllerGetBalances(
    requestParameters: BalancesControllerGetBalancesRequest,
    initOverrides?: RequestInit
  ): Promise<Balance> {
    const response = await this.balancesControllerGetBalancesRaw(requestParameters, initOverrides)
    return await response.value()
  }
}
