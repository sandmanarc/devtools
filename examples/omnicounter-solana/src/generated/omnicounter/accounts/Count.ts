/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as web3 from '@solana/web3.js'
import * as beet from '@metaplex-foundation/beet'
import * as beetSolana from '@metaplex-foundation/beet-solana'

/**
 * Arguments used to create {@link Count}
 * @category Accounts
 * @category generated
 */
export type CountArgs = {
    id: number
    admin: web3.PublicKey
    count: beet.bignum
    composedCount: beet.bignum
    bump: number
    endpointProgram: web3.PublicKey
}

export const countDiscriminator = [116, 199, 152, 236, 90, 156, 182, 0]
/**
 * Holds the data for the {@link Count} Account and provides de/serialization
 * functionality for that data
 *
 * @category Accounts
 * @category generated
 */
export class Count implements CountArgs {
    private constructor(
        readonly id: number,
        readonly admin: web3.PublicKey,
        readonly count: beet.bignum,
        readonly composedCount: beet.bignum,
        readonly bump: number,
        readonly endpointProgram: web3.PublicKey
    ) {}

    /**
     * Creates a {@link Count} instance from the provided args.
     */
    static fromArgs(args: CountArgs) {
        return new Count(args.id, args.admin, args.count, args.composedCount, args.bump, args.endpointProgram)
    }

    /**
     * Deserializes the {@link Count} from the data of the provided {@link web3.AccountInfo}.
     * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
     */
    static fromAccountInfo(accountInfo: web3.AccountInfo<Buffer>, offset = 0): [Count, number] {
        return Count.deserialize(accountInfo.data, offset)
    }

    /**
     * Retrieves the account info from the provided address and deserializes
     * the {@link Count} from its data.
     *
     * @throws Error if no account info is found at the address or if deserialization fails
     */
    static async fromAccountAddress(
        connection: web3.Connection,
        address: web3.PublicKey,
        commitmentOrConfig?: web3.Commitment | web3.GetAccountInfoConfig
    ): Promise<Count> {
        const accountInfo = await connection.getAccountInfo(address, commitmentOrConfig)
        if (accountInfo == null) {
            throw new Error(`Unable to find Count account at ${address}`)
        }
        return Count.fromAccountInfo(accountInfo, 0)[0]
    }

    /**
     * Provides a {@link web3.Connection.getProgramAccounts} config builder,
     * to fetch accounts matching filters that can be specified via that builder.
     *
     * @param programId - the program that owns the accounts we are filtering
     */
    static gpaBuilder(programId: web3.PublicKey = new web3.PublicKey('2tLJfE12h5RY7vJqK6i41taeg8ejzigoFXduBanDV4Cu')) {
        return beetSolana.GpaBuilder.fromStruct(programId, countBeet)
    }

    /**
     * Deserializes the {@link Count} from the provided data Buffer.
     * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
     */
    static deserialize(buf: Buffer, offset = 0): [Count, number] {
        return countBeet.deserialize(buf, offset)
    }

    /**
     * Serializes the {@link Count} into a Buffer.
     * @returns a tuple of the created Buffer and the offset up to which the buffer was written to store it.
     */
    serialize(): [Buffer, number] {
        return countBeet.serialize({
            accountDiscriminator: countDiscriminator,
            ...this,
        })
    }

    /**
     * Returns the byteSize of a {@link Buffer} holding the serialized data of
     * {@link Count}
     */
    static get byteSize() {
        return countBeet.byteSize
    }

    /**
     * Fetches the minimum balance needed to exempt an account holding
     * {@link Count} data from rent
     *
     * @param connection used to retrieve the rent exemption information
     */
    static async getMinimumBalanceForRentExemption(
        connection: web3.Connection,
        commitment?: web3.Commitment
    ): Promise<number> {
        return connection.getMinimumBalanceForRentExemption(Count.byteSize, commitment)
    }

    /**
     * Determines if the provided {@link Buffer} has the correct byte size to
     * hold {@link Count} data.
     */
    static hasCorrectByteSize(buf: Buffer, offset = 0) {
        return buf.byteLength - offset === Count.byteSize
    }

    /**
     * Returns a readable version of {@link Count} properties
     * and can be used to convert to JSON and/or logging
     */
    pretty() {
        return {
            id: this.id,
            admin: this.admin.toBase58(),
            count: (() => {
                const x = <{ toNumber: () => number }>this.count
                if (typeof x.toNumber === 'function') {
                    try {
                        return x.toNumber()
                    } catch (_) {
                        return x
                    }
                }
                return x
            })(),
            composedCount: (() => {
                const x = <{ toNumber: () => number }>this.composedCount
                if (typeof x.toNumber === 'function') {
                    try {
                        return x.toNumber()
                    } catch (_) {
                        return x
                    }
                }
                return x
            })(),
            bump: this.bump,
            endpointProgram: this.endpointProgram.toBase58(),
        }
    }
}

/**
 * @category Accounts
 * @category generated
 */
export const countBeet = new beet.BeetStruct<
    Count,
    CountArgs & {
        accountDiscriminator: number[] /* size: 8 */
    }
>(
    [
        ['accountDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
        ['id', beet.u8],
        ['admin', beetSolana.publicKey],
        ['count', beet.u64],
        ['composedCount', beet.u64],
        ['bump', beet.u8],
        ['endpointProgram', beetSolana.publicKey],
    ],
    Count.fromArgs,
    'Count'
)
