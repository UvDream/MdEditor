const { generateService } = require('@umijs/openapi');

generateService({
  requestLibPath: "import {request} from \"@/utils/http\";\n",
  schemaPath: 'http://127.0.0.1:8989/swagger/doc.json',
  serversPath: './src/services',
}).then(() => {});
