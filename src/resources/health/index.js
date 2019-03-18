const os = require("os");

class Health {
  async index(req, res, next) {
    try {
      const informations = {
        uptime: os.uptime(),
        cpu: {
          cores: os.cpus().length,
          description: os.cpus()[0].model
        },
        memory: {
          total: os.totalmem(),
          free: os.freemem()
        }
      };

      return res.json({ ...informations });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new Health();
