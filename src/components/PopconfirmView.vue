<template>
  <el-popconfirm
    confirmButtonText="好的"
    cancelButtonText="不用了"
    icon="el-icon-info"
    iconColor="red"
    title="这是一段内容确定删除吗？"
  >
    <template v-slot:reference>
      <el-button>删除</el-button>
    </template>
  </el-popconfirm>
</template>
