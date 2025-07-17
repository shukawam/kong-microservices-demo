import { WebTracerProvider } from '@opentelemetry/sdk-trace-web';
import { getWebAutoInstrumentations } from '@opentelemetry/auto-instrumentations-web';
import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-http';
import { BatchSpanProcessor } from '@opentelemetry/sdk-trace-base';
import { Resource } from '@opentelemetry/resources';
import { SEMRES_SERVICE_NAME } from '@opentelemetry/semantic-conventions';

const exporter = new OTLPTraceExporter({
  url: 'http://opentelemetry-collector.observability.svc.cluster.local:4318/v1/traces'
});

const provider = new WebTracerProvider({
  resource: new Resource({
    [SEMRES_SERVICE_NAME]: 'front-end',
  }),
});

provider.addSpanProcessor(new BatchSpanProcessor(exporter));

provider.register({
  instrumentations: [
    getWebAutoInstrumentations({
      '@opentelemetry/instrumentation-xml-http-request': {
        propagateTraceHeaderCorsUrls: [
          /.+/g,
        ],
      },
      '@opentelemetry/instrumentation-fetch': {
        propagateTraceHeaderCorsUrls: [
          /.+/g,
        ],
      },
    }),
  ],
});
