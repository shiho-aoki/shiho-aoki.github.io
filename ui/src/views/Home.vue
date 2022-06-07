<template>
  <div class="home">
    <PageTitle title="Latest Activity" />
    <PageHeading title="New Tech Note Release3.2" type="Tech Note Release" where="Online" date="Published Jun 8, 2022"
                  summary="today, we are released new our materilas: tech's 3.2today, we are released new our materilas: tech's 3.2today, we are released new our materilas: tech's 3.2today, we are released new our materilas: tech's 3.2today, we are released new our materilas: tech's 3.2today, we are released new our materilas: tech's 3.2today, we are released new our materilas: tech's 3.2today, we are released new our materilas: tech's 3.2today, we are released new our materilas: tech's 3.2today, we are released new our materilas: tech's 3.2today, we are released new our materilas: tech's 3.2today, we are released new our materilas: tech's 3.2today, we are released new our materilas: tech's 3.2" />
    <CategoryPreview />
  </div>
</template>

<script>
// @ is an alias to /src
import PageTitle from "../components/PageTitle.vue";
import PageHeading from "../components/PageHeading.vue";
import CategoryPreview from "../components/CategoryPreview.vue";

export default {
  name: "Home",
  components: {
    PageTitle,
    PageHeading,
    CategoryPreview
  },
};
</script>