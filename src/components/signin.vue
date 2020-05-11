<template>
  <v-row justify="center">
    <v-col cols="12" sm="10" md="8" lg="6">
      <v-card ref="form">
    <v-card-text>
        <p class="title text-center bold amber--text darken-3">Create an account</p>
            <v-text-field
                ref="name"
                v-model="name"
                :rules="[() => !!name || 'This field is required']"
                :error-messages="errorMessages"
                label="Full Name"
                placeholder="Enter your name"
                required
                solo
            ></v-text-field>
            <v-text-field
                ref="address"
                v-model="address"
                :rules="[
                () => !!address || 'This field is required',
                () => !!address && address.length <= 25 || 'Address must be less than 25 characters',
                addressCheck
                ]"
                label="Address Line"
                placeholder="Address"
                counter="25"
                required
                solo
            ></v-text-field>
            <v-text-field
                ref="city"
                v-model="city"
                :rules="[() => !!city || 'This field is required', addressCheck]"
                label="City"
                placeholder="City"
                required
                solo
            ></v-text-field>
            <v-text-field
                ref="zip"
                v-model="zip"
                :rules="[() => !!zip || 'This field is required']"
                label="ZIP / Postal Code"
                required
                placeholder="Zip code"
                solo
            ></v-text-field>
            <v-autocomplete
                ref="country"
                v-model="country"
                :rules="[() => !!country || 'This field is required']"
                :items="countries"
                label="Country"
                placeholder="Select..."
                required
                solo
            ></v-autocomplete>
            </v-card-text>
            <v-card-actions >
            <v-btn text>Cancel</v-btn>
            <v-slide-x-reverse-transition>
                <v-tooltip
                v-if="formHasErrors"
                right
                >
                <template v-slot:activator="{ on }">
                    <v-btn
                    icon
                    class="my-0"
                    @click="resetForm"
                    v-on="on"
                    >
                    <v-icon>mdi-refresh</v-icon>
                    </v-btn>
                </template>
                <span>Refresh form</span>
                </v-tooltip>
            </v-slide-x-reverse-transition>
            <v-btn color="amber darken-3" text @click="submit">Submit</v-btn>
            </v-card-actions>
      </v-card>
        </v-col>
    </v-row>
</template>

<script>
export default {

}
</script>

<style>

</style>