const samples = {
  sales: {
    title: "示例销售数据",
    rows: [
      { 月份: "1月", 城市: "上海", 销售额: 128, 成本: 84, 转化率: 18 },
      { 月份: "2月", 城市: "上海", 销售额: 156, 成本: 92, 转化率: 21 },
      { 月份: "3月", 城市: "上海", 销售额: 188, 成本: 116, 转化率: 24 },
      { 月份: "4月", 城市: "上海", 销售额: 171, 成本: 102, 转化率: 22 },
      { 月份: "1月", 城市: "北京", 销售额: 102, 成本: 66, 转化率: 16 },
      { 月份: "2月", 城市: "北京", 销售额: 136, 成本: 77, 转化率: 19 },
      { 月份: "3月", 城市: "北京", 销售额: 151, 成本: 88, 转化率: 20 },
      { 月份: "4月", 城市: "北京", 销售额: 167, 成本: 94, 转化率: 23 },
    ],
  },
  ops: {
    title: "示例运营指标",
    rows: [
      { 渠道: "App", 周期: "W1", 访问量: 3400, 下单量: 426, 客单价: 168 },
      { 渠道: "App", 周期: "W2", 访问量: 3850, 下单量: 491, 客单价: 172 },
      { 渠道: "App", 周期: "W3", 访问量: 4140, 下单量: 506, 客单价: 178 },
      { 渠道: "Web", 周期: "W1", 访问量: 2200, 下单量: 213, 客单价: 156 },
      { 渠道: "Web", 周期: "W2", 访问量: 2480, 下单量: 238, 客单价: 162 },
      { 渠道: "Web", 周期: "W3", 访问量: 2610, 下单量: 247, 客单价: 166 },
    ],
  },
  ecommerce: {
    title: "电商核心指标",
    rows: [
      { 日期: "5月1日", 品类: "潮玩", 渠道: "App", GMV: 286000, 订单量: 1540, 客单价: 186, UV: 48200, PV: 138000, 支付转化率: 3.2, 点击率: 18.6, 退款率: 2.4, 发货时长: 18, 履约率: 96.8, 售罄率: 68, 库存周转: 4.8, 复购率: 21.5, 留存率: 37, 毛利率: 28.6 },
      { 日期: "5月2日", 品类: "潮玩", 渠道: "App", GMV: 312000, 订单量: 1688, 客单价: 185, UV: 51400, PV: 151000, 支付转化率: 3.4, 点击率: 19.2, 退款率: 2.1, 发货时长: 17, 履约率: 97.1, 售罄率: 72, 库存周转: 5.1, 复购率: 22.1, 留存率: 38, 毛利率: 29.2 },
      { 日期: "5月3日", 品类: "手办", 渠道: "App", GMV: 428000, 订单量: 2060, 客单价: 208, UV: 59800, PV: 176000, 支付转化率: 3.7, 点击率: 20.4, 退款率: 2.8, 发货时长: 20, 履约率: 95.9, 售罄率: 79, 库存周转: 5.8, 复购率: 23.4, 留存率: 39, 毛利率: 31.4 },
      { 日期: "5月4日", 品类: "手办", 渠道: "直播", GMV: 532000, 订单量: 2480, 客单价: 215, UV: 64200, PV: 204000, 支付转化率: 4.1, 点击率: 24.5, 退款率: 3.0, 发货时长: 22, 履约率: 94.7, 售罄率: 84, 库存周转: 6.2, 复购率: 24.2, 留存率: 41, 毛利率: 30.8 },
      { 日期: "5月5日", 品类: "票务", 渠道: "Web", GMV: 218000, 订单量: 1320, 客单价: 165, UV: 33600, PV: 92000, 支付转化率: 3.9, 点击率: 16.8, 退款率: 1.5, 发货时长: 2, 履约率: 99.2, 售罄率: 61, 库存周转: 4.1, 复购率: 18.6, 留存率: 34, 毛利率: 22.4 },
      { 日期: "5月6日", 品类: "票务", 渠道: "Web", GMV: 244000, 订单量: 1450, 客单价: 168, UV: 36100, PV: 98000, 支付转化率: 4.0, 点击率: 17.4, 退款率: 1.6, 发货时长: 2, 履约率: 99.1, 售罄率: 64, 库存周转: 4.2, 复购率: 19.1, 留存率: 35, 毛利率: 23.1 },
    ],
  },
  screenshot: {
    title: "截图数据草稿",
    rows: [
      { 类目: "A", 指标: "识别草稿", 数值: 120, 占比: 22 },
      { 类目: "B", 指标: "识别草稿", 数值: 176, 占比: 31 },
      { 类目: "C", 指标: "识别草稿", 数值: 92, 占比: 17 },
      { 类目: "D", 指标: "识别草稿", 数值: 161, 占比: 30 },
    ],
  },
};

const palettes = {
  executive: ["#167c80", "#2c5f9e", "#d89a2b", "#6d7784", "#8e5ea2"],
  fresh: ["#22a699", "#f2be22", "#f29727", "#5f6caf", "#2d9cdb"],
  mono: ["#1e2933", "#52616b", "#7b8794", "#aab4bf", "#c9d1d9"],
  contrast: ["#005f73", "#ee9b00", "#ae2012", "#5c677d", "#7f4f24"],
};

const chartNames = {
  bar: "柱状图",
  "stacked-bar": "堆叠柱状图",
  line: "折线图",
  "area-line": "面积折线图",
  pie: "饼图",
  rose: "南丁格尔玫瑰图",
  scatter: "散点图",
  effectScatter: "涟漪散点图",
  radar: "雷达图",
  heatmap: "热力图",
  funnel: "漏斗图",
  gauge: "仪表盘",
  treemap: "矩形树图",
  sunburst: "旭日图",
  boxplot: "箱线图",
  candlestick: "K 线图",
  graph: "关系图",
  sankey: "桑基图",
  parallel: "平行坐标",
  lines: "路径线图",
  map: "地图",
  custom: "自定义系列",
  table: "数据表格",
};

let rows = [...samples.ecommerce.rows];
let datasetTitle = samples.ecommerce.title;
let sourceLabel = "电商核心指标";
let chartType = "bar";
let templateType = "bar";
let selectedMetric = "GMV";
let chart;
let latestOption = {};

const els = {
  chart: document.getElementById("chart"),
  table: document.getElementById("dataTable"),
  fileInput: document.getElementById("fileInput"),
  fileMeta: document.getElementById("fileMeta"),
  xField: document.getElementById("xField"),
  yField: document.getElementById("yField"),
  seriesField: document.getElementById("seriesField"),
  kpiStrip: document.getElementById("kpiStrip"),
  metricLibrary: document.getElementById("metricLibrary"),
  themeSelect: document.getElementById("themeSelect"),
  smoothLine: document.getElementById("smoothLine"),
  showArea: document.getElementById("showArea"),
  showLegend: document.getElementById("showLegend"),
  showGrid: document.getElementById("showGrid"),
  datasetTitle: document.getElementById("datasetTitle"),
  sourceLabel: document.getElementById("sourceLabel"),
  chartLabel: document.getElementById("chartLabel"),
  fieldLabel: document.getElementById("fieldLabel"),
  imagePreviewWrap: document.getElementById("imagePreviewWrap"),
  imagePreview: document.getElementById("imagePreview"),
  toast: document.getElementById("toast"),
};

const showToast = (message) => {
  els.toast.textContent = message;
  els.toast.classList.add("is-visible");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => els.toast.classList.remove("is-visible"), 2200);
};

const fields = () => (rows[0] ? Object.keys(rows[0]) : []);

const isNumericField = (field) => rows.some((row) => Number.isFinite(Number(row[field])));

const metricFormatters = {
  GMV: (value) => `¥${Math.round(value).toLocaleString("zh-CN")}`,
  订单量: (value) => `${Math.round(value).toLocaleString("zh-CN")} 单`,
  客单价: (value) => `¥${Math.round(value).toLocaleString("zh-CN")}`,
  UV: (value) => Math.round(value).toLocaleString("zh-CN"),
  PV: (value) => Math.round(value).toLocaleString("zh-CN"),
  支付转化率: (value) => `${value.toFixed(1)}%`,
  点击率: (value) => `${value.toFixed(1)}%`,
  退款率: (value) => `${value.toFixed(1)}%`,
  发货时长: (value) => `${value.toFixed(1)}h`,
  履约率: (value) => `${value.toFixed(1)}%`,
  售罄率: (value) => `${value.toFixed(1)}%`,
  库存周转: (value) => `${value.toFixed(1)} 次`,
  复购率: (value) => `${value.toFixed(1)}%`,
  留存率: (value) => `${value.toFixed(1)}%`,
  毛利率: (value) => `${value.toFixed(1)}%`,
};

const additiveMetrics = new Set(["GMV", "订单量", "UV", "PV"]);

const metricValue = (metric) => {
  const values = rows.map((row) => Number(row[metric])).filter(Number.isFinite);
  if (!values.length) return null;
  if (additiveMetrics.has(metric)) return values.reduce((sum, value) => sum + value, 0);
  return values.reduce((sum, value) => sum + value, 0) / values.length;
};

const formatMetric = (metric, value) => {
  if (value === null) return "--";
  return metricFormatters[metric] ? metricFormatters[metric](value) : value.toLocaleString("zh-CN");
};

const normalizeValue = (value) => {
  if (value === null || value === undefined) return "";
  if (typeof value === "number") return Number(value.toFixed(4));
  return String(value);
};

const normalizeRows = (rawRows) =>
  rawRows
    .filter((row) => row && Object.values(row).some((value) => value !== null && value !== undefined && String(value).trim() !== ""))
    .map((row) =>
      Object.fromEntries(
        Object.entries(row).map(([key, value]) => [String(key || "字段").trim(), normalizeValue(value)])
      )
    );

const fillSelectors = () => {
  const allFields = fields();
  const numericFields = allFields.filter(isNumericField);
  const categoryFields = allFields.filter((field) => !numericFields.includes(field));
  const selected = {
    x: els.xField.value || categoryFields[0] || allFields[0],
    y: els.yField.value || numericFields[0] || allFields[1] || allFields[0],
    series: els.seriesField.value || "",
  };

  const setOptions = (select, options, value, allowNone = false) => {
    select.innerHTML = "";
    if (allowNone) {
      const option = document.createElement("option");
      option.value = "";
      option.textContent = "不分组";
      select.append(option);
    }
    options.forEach((field) => {
      const option = document.createElement("option");
      option.value = field;
      option.textContent = field;
      select.append(option);
    });
    select.value = options.includes(value) || (allowNone && value === "") ? value : select.options[0]?.value || "";
  };

  setOptions(els.xField, allFields, selected.x);
  setOptions(els.yField, numericFields.length ? numericFields : allFields, selected.y);
  setOptions(els.seriesField, allFields.filter((field) => field !== els.xField.value && field !== els.yField.value), selected.series, true);
};

const renderKpis = () => {
  const priority = ["GMV", "订单量", "支付转化率", "客单价", "UV", "退款率", "售罄率", "复购率"];
  const available = priority.filter((metric) => fields().includes(metric));
  const metrics = (available.length ? available : fields().filter(isNumericField)).slice(0, 4);
  els.kpiStrip.innerHTML = "";

  metrics.forEach((metric) => {
    const card = document.createElement("button");
    card.className = `kpi-card${metric === selectedMetric ? " is-active" : ""}`;
    card.type = "button";
    card.innerHTML = `<span>${metric}</span><strong>${formatMetric(metric, metricValue(metric))}</strong><small>${additiveMetrics.has(metric) ? "累计值" : "平均值"}</small>`;
    card.addEventListener("click", () => selectMetric(metric));
    els.kpiStrip.append(card);
  });
};

const selectMetric = (metric) => {
  if (!fields().includes(metric) || !isNumericField(metric)) {
    showToast(`当前数据中没有「${metric}」字段，可先切换到电商指标示例或上传包含该字段的表。`);
    return;
  }
  selectedMetric = metric;
  els.yField.value = metric;
  document.querySelectorAll(".metric-chip").forEach((chip) => {
    chip.classList.toggle("is-active", chip.dataset.metric === metric);
  });
  renderKpis();
  renderChart();
};

const buildSeries = () => {
  const x = els.xField.value;
  const y = els.yField.value;
  const series = els.seriesField.value;
  const categories = [...new Set(rows.map((row) => String(row[x])))];

  if (chartType === "pie" || chartType === "rose") {
    const totals = new Map();
    rows.forEach((row) => {
      const key = String(row[x]);
      totals.set(key, (totals.get(key) || 0) + Number(row[y] || 0));
    });
    return {
      xAxisData: categories,
      seriesData: [
        {
          name: y,
          type: "pie",
          radius: ["38%", "68%"],
          center: ["50%", "52%"],
          roseType: chartType === "rose" ? "radius" : undefined,
          label: { formatter: "{b}\n{d}%" },
          data: [...totals.entries()].map(([name, value]) => ({ name, value })),
        },
      ],
    };
  }

  if (series) {
    const groups = [...new Set(rows.map((row) => String(row[series])))];
    return {
      xAxisData: categories,
      seriesData: groups.map((group) => ({
        name: group,
        type: chartType === "stacked-bar" ? "bar" : chartType === "area-line" ? "line" : chartType,
        stack: chartType === "stacked-bar" ? "total" : undefined,
        smooth: (chartType === "line" || chartType === "area-line") && els.smoothLine.checked,
        areaStyle: (chartType === "area-line" || (chartType === "line" && els.showArea.checked)) ? {} : undefined,
        symbolSize: chartType === "scatter" ? 12 : undefined,
        data: categories.map((category) => {
          const match = rows.find((row) => String(row[x]) === category && String(row[series]) === group);
          return Number(match?.[y] || 0);
        }),
      })),
    };
  }

  return {
    xAxisData: categories,
    seriesData: [
      {
        name: y,
        type: chartType === "stacked-bar" ? "bar" : chartType === "area-line" ? "line" : chartType,
        stack: chartType === "stacked-bar" ? "total" : undefined,
        smooth: (chartType === "line" || chartType === "area-line") && els.smoothLine.checked,
        areaStyle: (chartType === "area-line" || (chartType === "line" && els.showArea.checked)) ? {} : undefined,
        symbolSize: chartType === "scatter" ? 12 : undefined,
        data: categories.map((category) => {
          const total = rows
            .filter((row) => String(row[x]) === category)
            .reduce((sum, row) => sum + Number(row[y] || 0), 0);
          return total;
        }),
      },
    ],
  };
};

const buildGraphicTableOption = (palette) => {
  const allFields = fields().slice(0, 5);
  const visibleRows = rows.slice(0, 8);
  const left = 34;
  const top = 92;
  const cellWidth = 150;
  const rowHeight = 42;
  const children = [];

  allFields.forEach((field, colIndex) => {
    children.push({
      type: "rect",
      shape: { x: left + colIndex * cellWidth, y: top, width: cellWidth, height: rowHeight },
      style: { fill: colIndex === 0 ? palette[0] : "#edf1f5", stroke: "#dce2e8" },
    });
    children.push({
      type: "text",
      style: {
        x: left + colIndex * cellWidth + 14,
        y: top + 26,
        text: field,
        fill: colIndex === 0 ? "#ffffff" : "#15191e",
        font: "700 13px sans-serif",
      },
    });
  });

  visibleRows.forEach((row, rowIndex) => {
    allFields.forEach((field, colIndex) => {
      const y = top + (rowIndex + 1) * rowHeight;
      children.push({
        type: "rect",
        shape: { x: left + colIndex * cellWidth, y, width: cellWidth, height: rowHeight },
        style: { fill: rowIndex % 2 ? "#ffffff" : "#f8fafb", stroke: "#dce2e8" },
      });
      children.push({
        type: "text",
        style: {
          x: left + colIndex * cellWidth + 14,
          y: y + 26,
          text: String(row[field] ?? ""),
          fill: "#15191e",
          font: "500 13px sans-serif",
          width: cellWidth - 22,
          overflow: "truncate",
        },
      });
    });
  });

  return {
    color: palette,
    backgroundColor: "#ffffff",
    title: {
      text: datasetTitle,
      subtext: "ECharts graphic table style",
      left: 26,
      top: 22,
      textStyle: { color: "#15191e", fontSize: 18, fontWeight: 800 },
      subtextStyle: { color: "#65707d", fontSize: 12 },
    },
    graphic: [{ type: "group", left: 0, top: 0, children }],
  };
};

const aggregateByCategory = () => {
  const x = els.xField.value;
  const y = els.yField.value;
  const totals = new Map();
  rows.forEach((row) => {
    const key = String(row[x]);
    totals.set(key, (totals.get(key) || 0) + Number(row[y] || 0));
  });
  return [...totals.entries()].map(([name, value]) => ({ name, value }));
};

const numericFields = () => fields().filter(isNumericField);

const baseOption = (palette, subtext = "") => ({
  color: palette,
  backgroundColor: "#ffffff",
  title: {
    text: datasetTitle,
    subtext,
    left: 26,
    top: 22,
    textStyle: { color: "#15191e", fontSize: 18, fontWeight: 800 },
    subtextStyle: { color: "#65707d", fontSize: 12 },
  },
  tooltip: {},
});

const buildSpecialOption = (palette) => {
  const x = els.xField.value;
  const y = els.yField.value;
  const series = els.seriesField.value;
  const categories = [...new Set(rows.map((row) => String(row[x])))];
  const values = rows.map((row) => Number(row[y] || 0));
  const total = values.reduce((sum, value) => sum + value, 0);
  const aggregated = aggregateByCategory();
  const nums = numericFields();
  const option = baseOption(palette);

  if (chartType === "radar") {
    const indicators = nums.slice(0, 6).map((field) => ({
      name: field,
      max: Math.max(...rows.map((row) => Number(row[field] || 0))) * 1.2 || 100,
    }));
    option.radar = { indicator: indicators, radius: "62%", center: ["50%", "58%"] };
    option.legend = { show: els.showLegend.checked, top: 62, left: 24 };
    option.series = [{
      type: "radar",
      areaStyle: { opacity: 0.16 },
      data: rows.slice(0, 4).map((row) => ({
        name: series ? String(row[series]) : String(row[x]),
        value: indicators.map((item) => Number(row[item.name] || 0)),
      })),
    }];
    return option;
  }

  if (chartType === "heatmap") {
    const groupField = series || fields().find((field) => field !== x && field !== y && !isNumericField(field)) || x;
    const groups = [...new Set(rows.map((row) => String(row[groupField])))];
    option.grid = { top: 112, left: 80, right: 34, bottom: 56 };
    option.xAxis = { type: "category", data: categories, splitArea: { show: true } };
    option.yAxis = { type: "category", data: groups, splitArea: { show: true } };
    option.visualMap = { min: 0, max: Math.max(...values) || 1, calculable: true, orient: "horizontal", left: "center", bottom: 8 };
    option.series = [{
      type: "heatmap",
      data: rows.map((row) => [categories.indexOf(String(row[x])), groups.indexOf(String(row[groupField])), Number(row[y] || 0)]),
      label: { show: true },
    }];
    return option;
  }

  if (chartType === "funnel") {
    option.legend = { show: els.showLegend.checked, top: 62, left: 24 };
    option.series = [{ type: "funnel", left: "12%", top: 112, width: "76%", height: "70%", sort: "descending", data: aggregated }];
    return option;
  }

  if (chartType === "gauge") {
    const percent = Math.min(100, Math.max(0, additiveMetrics.has(y) ? total / Math.max(total, 1) * 100 : metricValue(y) || values[0] || 0));
    option.series = [{
      type: "gauge",
      min: 0,
      max: 100,
      progress: { show: true, width: 16 },
      axisLine: { lineStyle: { width: 16 } },
      detail: { formatter: "{value}%", fontSize: 28 },
      data: [{ value: Number(percent.toFixed(1)), name: y }],
    }];
    return option;
  }

  if (chartType === "treemap") {
    const groupField = series || fields().find((field) => field !== x && field !== y && !isNumericField(field));
    option.series = [{
      type: "treemap",
      top: 92,
      bottom: 24,
      roam: false,
      data: groupField
        ? [...new Set(rows.map((row) => String(row[groupField])))].map((group) => ({
            name: group,
            children: rows.filter((row) => String(row[groupField]) === group).map((row) => ({ name: String(row[x]), value: Number(row[y] || 0) })),
          }))
        : aggregated,
    }];
    return option;
  }

  if (chartType === "sunburst") {
    const groupField = series || fields().find((field) => field !== x && field !== y && !isNumericField(field));
    option.series = [{
      type: "sunburst",
      radius: [0, "78%"],
      top: 86,
      data: groupField
        ? [...new Set(rows.map((row) => String(row[groupField])))].map((group) => ({
            name: group,
            children: rows.filter((row) => String(row[groupField]) === group).map((row) => ({ name: String(row[x]), value: Number(row[y] || 0) })),
          }))
        : aggregated,
    }];
    return option;
  }

  if (chartType === "boxplot") {
    const sorted = [...values].filter(Number.isFinite).sort((a, b) => a - b);
    const q = (p) => sorted[Math.floor((sorted.length - 1) * p)] || 0;
    option.grid = { top: 112, left: 70, right: 34, bottom: 56 };
    option.xAxis = { type: "category", data: [y] };
    option.yAxis = { type: "value", splitLine: { show: els.showGrid.checked } };
    option.series = [{ type: "boxplot", data: [[sorted[0] || 0, q(0.25), q(0.5), q(0.75), sorted.at(-1) || 0]] }];
    return option;
  }

  if (chartType === "candlestick") {
    const candleData = aggregated.map((item, index) => {
      const open = Number(item.value) * (0.88 + (index % 3) * 0.04);
      const close = Number(item.value);
      const low = Math.min(open, close) * 0.9;
      const high = Math.max(open, close) * 1.12;
      return [open, close, low, high].map((value) => Number(value.toFixed(2)));
    });
    option.grid = { top: 112, left: 70, right: 34, bottom: 56 };
    option.xAxis = { type: "category", data: aggregated.map((item) => item.name) };
    option.yAxis = { type: "value", splitLine: { show: els.showGrid.checked } };
    option.series = [{ type: "candlestick", data: candleData }];
    return option;
  }

  if (chartType === "graph") {
    const nodes = aggregated.map((item, index) => ({ name: item.name, value: item.value, symbolSize: Math.max(24, Math.sqrt(item.value) / 18), category: index % 3 }));
    option.legend = { show: els.showLegend.checked, top: 62, left: 24 };
    option.series = [{
      type: "graph",
      layout: "force",
      top: 80,
      roam: true,
      label: { show: true },
      force: { repulsion: 180, edgeLength: 90 },
      data: nodes,
      links: nodes.slice(1).map((node, index) => ({ source: nodes[index].name, target: node.name })),
    }];
    return option;
  }

  if (chartType === "sankey") {
    const groupField = series || fields().find((field) => field !== x && field !== y && !isNumericField(field)) || x;
    const groups = [...new Set(rows.map((row) => String(row[groupField])))];
    const targets = [...new Set(rows.map((row) => String(row[x])))];
    option.series = [{
      type: "sankey",
      top: 94,
      bottom: 24,
      data: [...groups, ...targets].map((name) => ({ name })),
      links: rows.map((row) => ({ source: String(row[groupField]), target: String(row[x]), value: Number(row[y] || 0) })),
    }];
    return option;
  }

  if (chartType === "parallel") {
    const dimensions = nums.slice(0, 6).map((field, index) => ({ dim: index, name: field }));
    option.parallelAxis = dimensions;
    option.parallel = { top: 92, left: 48, right: 34, bottom: 32 };
    option.series = [{ type: "parallel", lineStyle: { width: 2, opacity: 0.55 }, data: rows.map((row) => dimensions.map((dim) => Number(row[dim.name] || 0))) }];
    return option;
  }

  if (chartType === "lines") {
    option.grid = { top: 112, left: 58, right: 34, bottom: 56 };
    option.xAxis = { type: "value", min: 0, max: Math.max(aggregated.length - 1, 1), splitLine: { show: els.showGrid.checked } };
    option.yAxis = { type: "value", splitLine: { show: els.showGrid.checked } };
    option.series = [{
      type: "lines",
      coordinateSystem: "cartesian2d",
      polyline: true,
      effect: { show: true, symbol: "arrow", symbolSize: 8 },
      lineStyle: { width: 3, curveness: 0.2 },
      data: [{ coords: aggregated.map((item, index) => [index, item.value]) }],
    }];
    return option;
  }

  if (chartType === "map") {
    option.graphic = [{
      type: "group",
      left: "center",
      top: "middle",
      children: [
        { type: "text", style: { text: "Map series 需要注册地图 GeoJSON", fill: "#15191e", font: "700 22px sans-serif", textAlign: "center" } },
        { type: "text", top: 34, style: { text: "当前先保留类型入口；接入省市/国家地图数据后即可输出 map option", fill: "#65707d", font: "500 14px sans-serif", textAlign: "center" } },
      ],
    }];
    return option;
  }

  if (chartType === "custom") {
    option.grid = { top: 112, left: 58, right: 34, bottom: 56 };
    option.xAxis = { type: "category", data: aggregated.map((item) => item.name) };
    option.yAxis = { type: "value" };
    option.series = [{
      type: "custom",
      renderItem: (params, api) => {
        const categoryIndex = api.value(0);
        const value = api.value(1);
        const start = api.coord([categoryIndex, value]);
        const size = api.size([1, value]);
        return { type: "rect", shape: { x: start[0] - 12, y: start[1], width: 24, height: Math.max(2, size[1]) }, style: api.style() };
      },
      encode: { x: 0, y: 1 },
      data: aggregated.map((item, index) => [index, item.value]),
    }];
    return option;
  }

  return null;
};

const renderChart = () => {
  if (!window.echarts || !rows.length) return;
  const palette = palettes[els.themeSelect.value];
  const isGraphicTable = chartType === "table";

  if (isGraphicTable) {
    latestOption = buildGraphicTableOption(palette);
    chart.setOption(latestOption, true);
    els.datasetTitle.textContent = datasetTitle;
    els.sourceLabel.textContent = sourceLabel;
    els.chartLabel.textContent = chartNames[chartType];
    els.fieldLabel.textContent = fields().slice(0, 5).join(" / ");
    renderKpis();
    return;
  }

  const specialOption = buildSpecialOption(palette);
  if (specialOption) {
    latestOption = specialOption;
    chart.setOption(latestOption, true);
    els.datasetTitle.textContent = datasetTitle;
    els.sourceLabel.textContent = sourceLabel;
    els.chartLabel.textContent = chartNames[chartType];
    els.fieldLabel.textContent = chartType === "map" ? "map / GeoJSON" : `${els.xField.value} / ${els.yField.value}${els.seriesField.value ? ` / ${els.seriesField.value}` : ""}`;
    renderKpis();
    return;
  }

  const { xAxisData, seriesData } = buildSeries();
  const isPie = chartType === "pie" || chartType === "rose";

  latestOption = {
    color: palette,
    backgroundColor: "#ffffff",
    title: {
      text: datasetTitle,
      left: 26,
      top: 22,
      textStyle: { color: "#15191e", fontSize: 18, fontWeight: 800 },
    },
    tooltip: { trigger: isPie ? "item" : "axis" },
    legend: { show: els.showLegend.checked, top: 62, left: 24 },
    grid: isPie ? undefined : { top: 112, left: 58, right: 34, bottom: 56 },
    xAxis: isPie
      ? undefined
      : {
          type: "category",
          data: xAxisData,
          axisTick: { show: false },
          axisLine: { lineStyle: { color: "#b7c0ca" } },
          splitLine: { show: false },
        },
    yAxis: isPie
      ? undefined
      : {
          type: "value",
          splitLine: { show: els.showGrid.checked, lineStyle: { color: "#e6ebf0" } },
          axisLabel: { color: "#65707d" },
        },
    series: seriesData,
  };

  chart.setOption(latestOption, true);
  els.datasetTitle.textContent = datasetTitle;
  els.sourceLabel.textContent = sourceLabel;
  els.chartLabel.textContent = chartNames[chartType];
  els.fieldLabel.textContent = `${els.xField.value} / ${els.yField.value}${els.seriesField.value ? ` / ${els.seriesField.value}` : ""}`;
  renderKpis();
};

const renderTable = () => {
  const allFields = fields();
  els.table.innerHTML = "";
  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");
  allFields.forEach((field) => {
    const th = document.createElement("th");
    th.textContent = field;
    headerRow.append(th);
  });
  thead.append(headerRow);

  const tbody = document.createElement("tbody");
  rows.forEach((row, rowIndex) => {
    const tr = document.createElement("tr");
    allFields.forEach((field) => {
      const td = document.createElement("td");
      const input = document.createElement("input");
      input.value = row[field] ?? "";
      input.addEventListener("input", () => {
        rows[rowIndex][field] = input.value;
        renderChart();
      });
      td.append(input);
      tr.append(td);
    });
    tbody.append(tr);
  });

  els.table.append(thead, tbody);
};

const loadRows = (nextRows, title, source) => {
  rows = normalizeRows(nextRows);
  datasetTitle = title;
  sourceLabel = source;
  fillSelectors();
  if (fields().includes(selectedMetric)) {
    els.yField.value = selectedMetric;
  }
  renderTable();
  renderKpis();
  renderChart();
};

const readWorkbook = async (file) => {
  const buffer = await file.arrayBuffer();
  const workbook = XLSX.read(buffer, { type: "array" });
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  return XLSX.utils.sheet_to_json(sheet, { defval: "" });
};

els.fileInput.addEventListener("change", async (event) => {
  const file = event.target.files?.[0];
  if (!file) return;
  els.fileMeta.textContent = file.name;

  if (file.type.startsWith("image/")) {
    els.imagePreview.src = URL.createObjectURL(file);
    els.imagePreviewWrap.hidden = false;
    loadRows(samples.screenshot.rows, "截图数据草稿", file.name);
    showToast("已载入截图预览，并生成可编辑的数据草稿。");
    return;
  }

  els.imagePreviewWrap.hidden = true;
  try {
    const parsedRows = await readWorkbook(file);
    loadRows(parsedRows, file.name.replace(/\.[^.]+$/, ""), file.name);
    showToast("Excel / CSV 数据已解析。");
  } catch (error) {
    showToast("文件解析失败，请确认是 Excel 或 CSV。");
  }
});

document.querySelectorAll("[data-template]").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-template]").forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    templateType = button.dataset.template;
    chartType = templateType;

    if (templateType === "area-line") {
      els.showArea.checked = true;
      els.smoothLine.checked = true;
    }

    if (templateType === "stacked-bar" && !els.seriesField.value) {
      const possibleSeries = fields().find((field) => field !== els.xField.value && field !== els.yField.value && !isNumericField(field));
      if (possibleSeries) els.seriesField.value = possibleSeries;
    }

    renderChart();
  });
});

["change", "input"].forEach((eventName) => {
  [els.xField, els.yField, els.seriesField, els.themeSelect, els.smoothLine, els.showArea, els.showLegend, els.showGrid].forEach((control) => {
    control.addEventListener(eventName, renderChart);
  });
});

document.getElementById("sampleSales").addEventListener("click", () => {
  els.imagePreviewWrap.hidden = true;
  loadRows(samples.sales.rows, samples.sales.title, "示例销售数据");
});

document.getElementById("sampleOps").addEventListener("click", () => {
  els.imagePreviewWrap.hidden = true;
  loadRows(samples.ops.rows, samples.ops.title, "示例运营指标");
});

document.getElementById("sampleEcom").addEventListener("click", () => {
  els.imagePreviewWrap.hidden = true;
  selectedMetric = "GMV";
  loadRows(samples.ecommerce.rows, samples.ecommerce.title, "电商核心指标");
});

els.metricLibrary.addEventListener("click", (event) => {
  const chip = event.target.closest("[data-metric]");
  if (!chip) return;
  selectMetric(chip.dataset.metric);
});

document.getElementById("addRow").addEventListener("click", () => {
  const blank = Object.fromEntries(fields().map((field) => [field, ""]));
  rows.push(blank);
  renderTable();
  renderChart();
});

document.getElementById("copyOption").addEventListener("click", async () => {
  await navigator.clipboard.writeText(JSON.stringify(latestOption, null, 2));
  showToast("ECharts option 已复制。");
});

document.getElementById("downloadPng").addEventListener("click", () => {
  const link = document.createElement("a");
  link.download = `${datasetTitle || "chart"}.png`;
  link.href = chart.getDataURL({ pixelRatio: 2, backgroundColor: "#ffffff" });
  link.click();
});

window.addEventListener("resize", () => chart?.resize());

chart = echarts.init(els.chart);
loadRows(samples.ecommerce.rows, samples.ecommerce.title, "电商核心指标");
