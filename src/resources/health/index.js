const os = require("os");
const diskusage = require("diskusage");

class Health {
  async index(req, res, next) {
    try {
      const { total: diskTotal, free: diskFree } = await diskusage.check("/");

      const informations = {
        uptime: parseFloat((os.uptime() / 86400).toFixed(0)),
        memory: {
          total: parseFloat((os.totalmem() / 1e9).toFixed(2)),
          used: parseFloat(((os.totalmem() - os.freemem()) / 1e9).toFixed(2))
        },
        disk: {
          total: parseFloat((diskTotal / 1e9).toFixed(2)),
          used: parseFloat(((diskTotal - diskFree) / 1e9).toFixed(2))
        }
      };

      return res.json({ ...informations });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new Health();
